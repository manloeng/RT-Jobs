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
    # renders a html template
    return render_template('login.html')


def verify(id_token):
    # print(id_token)
    decoded_token = auth.verify_id_token(id_token)
    print(decoded_token)
    uid = decoded_token['uid']
    print(uid)

@app.route('/user/login', methods=['GET', 'POST'])
def user():
    email = request.form['email']
    password = request.form['password']
    auth.create_user_with_email_and_password(email, password)
    return render_template('loggedIn.html')


# Admin SDK - creating users and adding users
cred = credentials.Certificate("firebase-private-key.json")
default_app = firebase_admin.initialize_app(cred)
print(default_app)
db = firestore.client()

doc_ref = db.collection(u'users').document(u'alovelace')
doc_ref.set({
    u'first': u'Ada',
    u'last': u'Lovelace',
    u'born': 1815
})

doc_ref = db.collection(u'users').document(u'aturing')
doc_ref.set({
    u'first': u'Alan',
    u'middle': u'Mathison',
    u'last': u'Turing',
    u'born': 1912
})


@app.route('/', methods=['GET'])
def user_data():
    users_ref = db.collection(u'users').where(u'first', u'==', 'Ada')
    docs = users_ref.stream()

    for doc in docs:
        print(u'{} => {}'.format(doc.id, doc.to_dict()))
        return jsonify(doc.id, doc.to_dict())


# Auth here - testing
# # user = auth.get_user(uid)
# # print('Successfully fetched user data: {0}'.format(user.uid))


# email = "manloengchung@googlemail.com"
# user = auth.get_user_by_email(email)
# print("hello")
# print(user)
# print('Successfully fetched user data: {0}'.format(user.uid))

# add user
# user = auth.create_user(
#     email='user@example.com',
#     email_verified=False,
#     phone_number='+15555550100',
#     password='secretPassword',
#     display_name='John Doe',
#     photo_url='http://www.example.com/12345678/photo.png',
#     disabled=False)
# print('Sucessfully created new user: {0}'.format(user.uid))
#
#
# user = auth.create_user(
#     uid='some-uid', email='user@example.com', phone_number='+15555550100')
# print('Sucessfully created new user: {0}'.format(user.uid))

# update user
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
#
# #  delete user
#
# auth.delete_user(uid)
# print('Successfully deleted user')


# list all users

# Start listing users from the beginning, 1000 at a time.
page = auth.list_users()
while page:
    for user in page.users:
        print('User: ' + user.uid)
    # Get next batch of users.
    page = page.get_next_page()

# Iterate through all users. This will still retrieve users in batches,
# buffering no more than 1000 users in memory at a time.
# for user in auth.list_users().iterate_all():
#     print('User: ' + user.uid)


