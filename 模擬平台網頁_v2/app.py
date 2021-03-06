from flask import Flask, render_template, session, url_for, request, redirect, flash
from flask_session import Session
from wtforms import Form, StringField, SelectField, TextAreaField, PasswordField, validators
from wtforms.fields.html5 import DateField
import os

app = Flask(__name__)

app.config['SESSION_TYPE'] = 'filesystem'
app.config['SECRET_KEY'] = os.urandom(24)
Session(app)

@app.route('/')
def index():
	return render_template('home.html')

@app.route('/chapters')
def chapters():
	return render_template('chapters.html', color0 = "yellow")

@app.route('/ch1')
def ch1():
	return render_template('ch1.html', color1 = "yellow")

@app.route('/ch2_concept_1')
def ch2_concept_1():
	session['option'] = "ch2_dog"
	return render_template('ch2_concept_1.html', color2 = "yellow", c2_1 = "yellow")

@app.route('/ch2_concept_1/<string:option>')
def ch2_concept_1_option(option):
	session['option'] = option
	return render_template('ch2_concept_1.html', color2 = "yellow", c2_1 = "yellow")

@app.route('/ch2_concept_2')
def ch2_concept_2():
	session['option'] = "0"
	return render_template('ch2_concept_2.html', color2 = "yellow", c2_2 = "yellow")

@app.route('/ch2_concept_2/<string:option>')
def ch2_concept_2_option(option):
	session['option'] = option
	return render_template('ch2_concept_2.html', color2 = "yellow", c2_2 = "yellow")

@app.route('/ch2_concept_3')
def ch2_concept_3():
	session['option'] = "ch2_nn0"
	return render_template('ch2_concept_3.html', color2 = "yellow", c2_3 = "yellow")

@app.route('/ch2_concept_3/<string:option>')
def ch2_concept_3_option(option):
	session['option'] = option
	return render_template('ch2_concept_3.html', color2 = "yellow", c2_3 = "yellow")

@app.route('/ch2_manipulate_1')
def ch2_manipulate_1():
	return render_template('ch2_manipulate_1.html', color2 = "yellow", m2_1 = "yellow")

@app.route('/ch2_manipulate_2')
def ch2_manipulate_2():
	return render_template('ch2_manipulate_2.html', color2 = "yellow", m2_2 = "yellow")

@app.route('/ch2_manipulate_3')
def ch2_manipulate_3():
	return render_template('ch2_manipulate_3.html', color2 = "yellow", m2_3 = "yellow")

@app.route('/ch2_manipulate_4')
def ch2_manipulate_4():
	return render_template('ch2_manipulate_4.html', color2 = "yellow", m2_4 = "yellow")

@app.route('/ch2_manipulate_5')
def ch2_manipulate_5():
	return render_template('ch2_manipulate_5.html', color2 = "yellow", m2_5 = "yellow")

@app.route('/ch2_manipulate_6')
def ch2_manipulate_6():
	return render_template('ch2_manipulate_6.html', color2 = "yellow", m2_6 = "yellow")

@app.route('/ch2_quiz_1')
def ch2_quiz_1():
	return render_template('ch2_quiz_1.html', color2 = "yellow", q2_1 = "yellow")

@app.route('/ch2_quiz_2')
def ch2_quiz_2():
	return render_template('ch2_quiz_2.html', color2 = "yellow", q2_2 = "yellow")

@app.route('/ch3_concept_1')
def ch3_concept_1():
	return render_template('ch3_concept_1.html', color3 = "yellow", c3_1 = "yellow")

@app.route('/ch3_manipulate_1')
def ch3_manipulate_1():
	return render_template('ch3_manipulate_1.html', color3 = "yellow", m3_1 = "yellow")

@app.route('/ch3_manipulate_2')
def ch3_manipulate_2():
	return render_template('ch3_manipulate_2.html', color3 = "yellow", m3_2 = "yellow")

@app.route('/ch3_quiz_1')
def ch3_quiz_1():
	return render_template('ch3_quiz_1.html', color3 = "yellow", q3_1 = "yellow")

@app.route('/ch3_quiz_2')
def ch3_quiz_2():
	return render_template('ch3_quiz_2.html', color3 = "yellow", q3_2 = "yellow")

@app.route('/ch4_concept_1')
def ch4_concept_1():
	return render_template('ch4_concept_1.html', color4 = "yellow", c4_1 = "yellow")

@app.route('/ch4_manipulate_1')
def ch4_manipulate_1():
	return render_template('ch4_manipulate_1.html', color4 = "yellow", m4_1 = "yellow")

@app.route('/ch4_manipulate_2')
def ch4_manipulate_2():
	return render_template('ch4_manipulate_2.html', color4 = "yellow", m4_2 = "yellow")

@app.route('/ch4_quiz_1')
def ch4_quiz_1():
	return render_template('ch4_quiz_1.html', color4 = "yellow", q4_1 = "yellow")

@app.route('/ch4_quiz_2')
def ch4_quiz_2():
	return render_template('ch4_quiz_2.html', color4 = "yellow", q4_2 = "yellow")

@app.route('/ch5_concept_1')
def ch5_concept_1():
	return render_template('ch5_concept_1.html', color5 = "yellow", c5_1 = "yellow")

@app.route('/ch5_manipulate_1')
def ch5_manipulate_1():
	return render_template('ch5_manipulate_1.html', color5 = "yellow", m5_1 = "yellow")

@app.route('/ch5_manipulate_2')
def ch5_manipulate_2():
	return render_template('ch5_manipulate_2.html', color5 = "yellow", m5_2 = "yellow")

@app.route('/ch5_quiz_1')
def ch5_quiz_1():
	return render_template('ch5_quiz_1.html', color5 = "yellow", q5_1 = "yellow")

@app.route('/ch5_quiz_2')
def ch5_quiz_2():
	return render_template('ch5_quiz_2.html', color5 = "yellow", q5_2 = "yellow")

@app.route('/ch6_concept_1')
def ch6_concept_1():
	return render_template('ch6_concept_1.html', color6 = "yellow", c6_1 = "yellow")

@app.route('/ch6_manipulate_1')
def ch6_manipulate_1():
	return render_template('ch6_manipulate_1.html', color6 = "yellow", m6_1 = "yellow")

@app.route('/ch6_manipulate_2')
def ch6_manipulate_2():
	return render_template('ch6_manipulate_2.html', color6 = "yellow", m6_2 = "yellow")

@app.route('/ch6_manipulate_3')
def ch6_manipulate_3():
	return render_template('ch6_manipulate_3.html', color6 = "yellow", m6_3 = "yellow")

@app.route('/ch6_quiz_1')
def ch6_quiz_1():
	return render_template('ch6_quiz_1.html', color6 = "yellow", q6_1 = "yellow")
"""
@app.route('/ch6_quiz_2')
def ch6_quiz_2():
	return render_template('ch6_quiz_2.html')
"""

"""
@app.route('/dragndrop')
def dragndrop():
	return render_template('dragndrop.html')
"""

if __name__ == '__main__':
	app.secrect_key = 'secrect123'
	app.run(debug = True, host="0.0.0.0", port = 5000)