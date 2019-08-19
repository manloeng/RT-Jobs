import pyrebase
from flask import *
import secret

app = Flask(__name__)

config = {
    "apiKey": secret.SECRET_KEY,
    "authDomain": "flask-auth-84403.firebaseapp.com",
    "databaseURL": "https://flask-auth-84403.firebaseio.com/",
    "storageBucket": "flask-auth-84403.appspot.com",
    "projectId": "flask-auth-84403"

}

firebase = pyrebase.initialize_app(config)
db = firebase.database()
auth = firebase.auth()


@app.route('/user/login', methods=['GET', 'POST'])
def userlogin():
    unsuccessful = 'Please check your credentials'
    successful = 'Login successful'
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        try:
            checkauth = auth.sign_in_with_email_and_password(email, password)
            print(checkauth)
            accountinfo = auth.get_account_info(checkauth['idToken'])
            print(accountinfo)
            # need to render the correct frontend components
            return render_template('login.html', s=successful)
        except:
            # need to render the correct frontend components
            return render_template('login.html', us=unsuccessful)

    return render_template('login.html')


@app.route('/business/login', methods=['GET', 'POST'])
def businesslogin():
    unsuccessful = 'Please check your credentials'
    successful = 'Login successful'
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        try:
            checkauth = auth.sign_in_with_email_and_password(email, password)
            print(checkauth)
            accountinfo = auth.get_account_info(checkauth['idToken'])
            print(accountinfo)
            # need to render the correct frontend components - linked to user page
            return render_template('login.html', s=successful)
        except:
            # need to render the correct frontend components - linked to user page
            return render_template('login.html', us=unsuccessful)

    return render_template('login.html')


@app.route('/user/signup', methods=['GET'])
def usersignup():
    # need to render the correct frontend components
    return render_template('signup.html')


@app.route('/business/signup', methods=['GET'])
def businesssignup():
    # need to render the correct frontend components - linked to user page
    return render_template('signup.html')


@app.route('/user/profile', methods=['GET', 'POST'])
def userprofile():
    email = request.form['email']
    password = request.form['password']
    auth.create_user_with_email_and_password(email, password)
    # need to render the correct frontend components
    return render_template('loggedIn.html')


@app.route('/business/profile', methods=['GET', 'POST'])
def businessprofile():
    email = request.form['email']
    password = request.form['password']
    auth.create_user_with_email_and_password(email, password)
    # need to render the correct frontend components
    return render_template('loggedIn.html')

# data = {"name": "Mortimer 'Morty' Smith"}
# db.child("users").push(data)