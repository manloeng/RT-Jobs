import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import auth
from flask import *
import pyrebase
import secret


app = Flask(__name__)

# Auth -  getting user idToken
config = {
    "apiKey": secret.SECRET_KEY,
    "authDomain": "flask-auth-84403.firebaseapp.com",
    "databaseURL": "https://flask-auth-84403.firebaseio.com/",
    "storageBucket": "flask-auth-84403.appspot.com",
    "projectId": "flask-auth-84403"

}

firebase = pyrebase.initialize_app(config)
pyreAuth = firebase.auth()


@app.route('/user/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        checkauth = pyreAuth.sign_in_with_email_and_password(email, password)
        id_token = checkauth['idToken']
        # verifies users - id token
        verify(id_token)
    #     need to add some sort of routing here!!!
    #     after verifiying idtoken do something!!!!
    # renders a html template
    return render_template('login.html')


def verify(id_token):
    # print(id_token)
    decoded_token = auth.verify_id_token(id_token)
    # print(decoded_token)
    uid = decoded_token['uid']
    print(uid)
    # returns : AqXgtr4pxrNmGn2QFkT6Z5FxpLZ2 (exmaples)
    # checking the user info by uid
    user = auth.get_user(uid)
    print(user, "<------")
    # returns <firebase_admin._user_mgt.UserRecord object at 0x103ab7fd0> <------
    print('Successfully fetched user data: {0}'.format(user.uid))
    # returns : Successfully fetched user data: AqXgtr4pxrNmGn2QFkT6Z5FxpLZ2
    # unique id (uid) should be stored in the frontend after successful login

    # checking via email?
    # email = "manloengchung@googlemail.com"
    # user = auth.get_user_by_email(email)
    # print("hello")
    # print(user)
    # print('Successfully fetched user data: {0}'.format(user.uid))


@app.route('/user/profile', methods=['GET', 'POST'])
def userprofile():
    return render_template('loggedIn.html')

# Admin SDK - setting up for admin privileges
cred = credentials.Certificate("firebase-private-key.json")
default_app = firebase_admin.initialize_app(cred)
# print(default_app)
db = firestore.client()


# adds user
@app.route('/user/signup', methods=['GET', 'POST'])
def usersignup():
    # need to use dynamic information from the frontend submission
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        try:
            # creates a new user in firebase (under the hood)
            user = auth.create_user(
                email=email,
                password=password,
                # display_name='John Doe',
            )
            # adds data into our data when user signs up
            # needs to be more dynamic
            doc_ref = db.collection(u'users').document()
            doc_ref.set({u'email': email})
        except:
            # should try print firebase error
            return jsonify({'messsage': "error"})
    return render_template('signup.html')

    # user = auth.create_user(
    #     uid='some-uid', email='user@example.com', phone_number='+15555550100')
    # print('Sucessfully created new user: {0}'.format(user.uid))


# fetches data from db with a where clause
@app.route('/', methods=['GET'])
def user_data():
    users_ref = db.collection(u'users').where(u'first', u'==', 'Ada')
    docs = users_ref.stream()

    for doc in docs:
        print(u'{} => {}'.format(doc.id, doc.to_dict()))
        return jsonify(doc.id, doc.to_dict())


# update user info
# user = auth.update_user(
#     uid,
#     email='user@example.com',
#     phone_number='+15555550100',
#     email_verified=True,
#     password='newPassword',
#     display_name='John Doe',
#     photo_url='http://www.example.com/12345678/photo.png',
#     disabled=True)
# print('Sucessfully updated user: {0}'.format(user.uid))


# #  delete user
# auth.delete_user(uid)
# print('Successfully deleted user')


# list all users that has registered in our database
# Start listing users from the beginning, 1000 at a time.
# page = auth.list_users()
# while page:
#     for user in page.users:
#         print('User: ' + user.uid)
#     # Get next batch of users.
#     page = page.get_next_page()

# Iterate through all users. This will still retrieve users in batches,
# buffering no more than 1000 users in memory at a time.
# for user in auth.list_users().iterate_all():
#     print('User: ' + user.uid)


# adding data into database

# doc_ref = db.collection(u'users').document(u'aturing')
# doc_ref.set({
#     u'first': u'Alan',
#     u'middle': u'Mathison',
#     u'last': u'Turing',
#     u'born': 1912
# })