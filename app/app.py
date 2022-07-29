from flask import (Flask, render_template, request, flash)
from flaskext.mysql import MySQL
import pymysql.cursors
import json
from decouple import config


app = Flask(__name__)

app.secret_key = config('SECRET_KEY')

# Database Configuration
app.config['MYSQL_DATABASE_HOST'] = config('DATABASE_HOST')
app.config['MYSQL_DATABASE_DB'] = config('DATABASE_DB')
app.config['MYSQL_DATABASE_USER'] = config('DATABASE_USER')
app.config['MYSQL_DATABASE_PASSWORD'] = config('DATABASE_PASSWORD')

# Initializing MySQL Database
mysql = MySQL(app, cursorclass=pymysql.cursors.DictCursor)

@app.route('/')
def home():
    
    return render_template('home.html')


@app.route('/portal/students')
def studentform():
    
    return render_template('studentform.html')


@app.route('/portal/students/form', methods=['POST'])
def student_registration():
    req = request.get_json()
    firstName = req['firstName']
    middleName = req['middleName']
    lastName = req['lastName']
    email = req['email']
    dob = req['dob']
    gender = req['gender']
    phone = req['phone']
    address = req['address']
    state = req['state']
    lga = req['lga']
    nok = req['nok']
    jambScore = req['jambScore']
    image = req['image']
    
    if firstName == '' or middleName == '' or lastName == '' or email == '' or dob == '' or gender == '' or phone == '' or address == '' or state == '' or lga == '' or nok == '' or jambScore == '' or image == '':
        flash('Please fill in all fields, to register a student', 'flash_error')
    else:
        conn = mysql.get_db()
        cur = conn.cursor()
        cur.execute('INSERT INTO students(FirstName, MiddleName, LastName, Email, DOB, Gender, Phone, Address, State, LGA, Next_Of_Kin, Jamb_Score, Image) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)', (firstName, middleName, lastName, email, dob, gender, phone, address, state, lga, nok, jambScore, image))
        conn.commit()
        cur.close()
        flash('Student Successfully Registered!', 'flash_success')
    
    return json.dumps('success')


@app.route('/admin/dashboard')
def admin_dashboard():
    conn = mysql.get_db()
    cur = conn.cursor()
    cur.execute('select * from students')
    rv = cur.fetchall()
    cur.close()
    
    return render_template('index.html', students=rv)

@app.route('/admin/dashboard', methods=['POST'])
def student_search():
    req = request.get_json()
    name = req['name']
    status = req['status']
    gender = req['gender']
    jambScore = req['jambScore']
    conn = mysql.get_db()
    cur = conn.cursor()
    cur.execute('SELECT * FROM students WHERE (FirstName LIKE %s OR LastName LIKE %s OR MiddleName LIKE %s) AND Admission_Status LIKE %s AND Gender LIKE %s AND Jamb_Score >= %s', (name, name, name, status, gender, jambScore))
    rv = cur.fetchall()
    cur.close()
    
    return json.dumps('success')


@app.route('/portal/students/<id>')
def student_profile(id):
    conn = mysql.get_db()
    cur = conn.cursor()
    cur.execute('select * from students where ID = %s', (id))
    rv = cur.fetchall()
    cur.close()
    
    return render_template('detail.html', profile=rv)

@app.route('/portal/students/<id>', methods=['POST'])
def change_status(id):
    req = request.get_json()
    status = req['status']
    conn = mysql.get_db()
    cur = conn.cursor()
    cur.execute('UPDATE students SET Admission_Status = %s WHERE ID = %s', (status, id))
    rv = cur.fetchall()
    conn.commit()
    cur.close()
    
    return json.dumps('success')
