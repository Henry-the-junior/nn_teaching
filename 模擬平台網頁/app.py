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
	return render_template('chapters.html')

@app.route('/ch1')
def ch1():
	return render_template('ch1.html')

@app.route('/ch2_concept_1')
def ch2_concept_1():
	session['option'] = "ch2_dog"
	return render_template('ch2_concept_1.html')

@app.route('/ch2_concept_1/<string:option>')
def ch2_concept_1_option(option):
	session['option'] = option
	return render_template('ch2_concept_1.html')

@app.route('/ch2_concept_2')
def ch2_concept_2():
	session['option'] = "0"
	return render_template('ch2_concept_2.html')

@app.route('/ch2_concept_2/<string:option>')
def ch2_concept_2_option(option):
	session['option'] = option
	return render_template('ch2_concept_2.html')

@app.route('/ch2_concept_3')
def ch2_concept_3():
	session['option'] = "ch2_nn0"
	return render_template('ch2_concept_3.html')

@app.route('/ch2_concept_3/<string:option>')
def ch2_concept_3_option(option):
	session['option'] = option
	return render_template('ch2_concept_3.html')

# ch2_manipulate_1 Questions Form Class
class ch2_QuestionsForm_1(Form):
    answer1 = TextAreaField('answer1')
    answer2 = TextAreaField('answer2')
    answer3 = TextAreaField('answer3')

@app.route('/ch2_manipulate_1', methods=['GET', 'POST'])
def ch2_manipulate_1():
	form = ch2_QuestionsForm_1(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data
		answer2 = form.answer2.data
		answer3 = form.answer3.data

		print(answer1)
		print(answer2)
		print(answer3)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch2_manipulate_1'))
	return render_template('ch2_manipulate_1.html', form = form)

# ch2_manipulate_2 Questions Form Class
class ch2_QuestionsForm_2(Form):
    answer1 = TextAreaField('answer1')
    answer2 = TextAreaField('answer2')
    answer3 = TextAreaField('answer3')
    answer4 = TextAreaField('answer4')
    answer5 = TextAreaField('answer5')

@app.route('/ch2_manipulate_2', methods=['GET', 'POST'])
def ch2_manipulate_2():
	form = ch2_QuestionsForm_2(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data
		answer2 = form.answer2.data
		answer3 = form.answer3.data
		answer4 = form.answer4.data
		answer5 = form.answer5.data

		print(answer1)
		print(answer2)
		print(answer3)
		print(answer4)
		print(answer5)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch2_manipulate_2'))
	return render_template('ch2_manipulate_2.html', form = form)

# ch2_manipulate_3 Questions Form Class
class ch2_QuestionsForm_3(Form):
    answer1 = TextAreaField('answer1')
    answer2 = TextAreaField('answer2')
    answer3 = TextAreaField('answer3')

@app.route('/ch2_manipulate_3', methods=['GET', 'POST'])
def ch2_manipulate_3():
	form = ch2_QuestionsForm_3(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data
		answer2 = form.answer2.data
		answer3 = form.answer3.data

		print(answer1)
		print(answer2)
		print(answer3)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch2_manipulate_3'))
	return render_template('ch2_manipulate_3.html', form = form)

@app.route('/ch2_manipulate_4')
def ch2_manipulate_4():
	return render_template('ch2_manipulate_4.html')


# ch2_manipulate_5 Questions Form Class
class ch2_QuestionsForm_5(Form):
    answer1 = TextAreaField('answer1')
    answer2 = TextAreaField('answer2')
    answer3 = TextAreaField('answer3')

@app.route('/ch2_manipulate_5', methods=['GET', 'POST'])
def ch2_manipulate_5():
	form = ch2_QuestionsForm_5(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data
		answer2 = form.answer2.data
		answer3 = form.answer3.data

		print(answer1)
		print(answer2)
		print(answer3)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch2_manipulate_5'))
	return render_template('ch2_manipulate_5.html', form = form)

# ch2_manipulate_6 Questions Form Class
class ch2_QuestionsForm_6(Form):
    answer1 = TextAreaField('answer1')
    answer2 = TextAreaField('answer2')

@app.route('/ch2_manipulate_6', methods=['GET', 'POST'])
def ch2_manipulate_6():
	form = ch2_QuestionsForm_6(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data
		answer2 = form.answer2.data

		print(answer1)
		print(answer2)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch2_manipulate_6'))
	return render_template('ch2_manipulate_6.html', form = form)

# ch3_concept_1 Questions Form Class
class ch3_QuestionsForm_1(Form):
    answer1 = TextAreaField('answer1')

@app.route('/ch3_concept_1', methods=['GET', 'POST'])
def ch3_concept_1():
	form = ch3_QuestionsForm_1(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data

		print(answer1)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch3_concept_1'))
	return render_template('ch3_concept_1.html', form = form)

# ch3_manipulate_1 Questions Form Class
class ch3_QuestionsForm_2(Form):
    answer1 = TextAreaField('answer1')
    answer2 = TextAreaField('answer2')

@app.route('/ch3_manipulate_1', methods=['GET', 'POST'])
def ch3_manipulate_1():
	form = ch3_QuestionsForm_2(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data
		answer2 = form.answer2.data

		print(answer1)
		print(answer2)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch3_manipulate_1'))
	return render_template('ch3_manipulate_1.html', form = form)

# ch3_manipulate_2 Questions Form Class
class ch3_QuestionsForm_3(Form):
    answer1 = TextAreaField('answer1')
    answer2 = TextAreaField('answer2')
    answer3 = TextAreaField('answer3')

@app.route('/ch3_manipulate_2', methods=['GET', 'POST'])
def ch3_manipulate_2():
	form = ch3_QuestionsForm_3(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data
		answer2 = form.answer2.data
		answer3 = form.answer3.data

		print(answer1)
		print(answer2)
		print(answer3)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch3_manipulate_2'))
	return render_template('ch3_manipulate_2.html', form = form)

@app.route('/ch4_concept_1')
def ch4_concept_1():
	return render_template('ch4_concept_1.html')

# ch4_manipulate_1 Questions Form Class
class ch4_QuestionsForm_0(Form):
    answer1 = TextAreaField('answer1')

@app.route('/ch4_manipulate_1')
def ch4_manipulate_1():
	form = ch4_QuestionsForm_0(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data

		print(answer1)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch4_manipulate_1'))
	return render_template('ch4_manipulate_1.html', form = form)

# ch4_manipulate_2 Questions Form Class
class ch4_QuestionsForm_1(Form):
    answer1 = TextAreaField('answer1')
    answer2 = TextAreaField('answer2')

@app.route('/ch4_manipulate_2', methods=['GET', 'POST'])
def ch4_manipulate_2():
	form = ch4_QuestionsForm_1(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data
		answer2 = form.answer2.data

		print(answer1)
		print(answer2)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch4_manipulate_2'))
	return render_template('ch4_manipulate_2.html', form = form)

@app.route('/ch5_concept_1')
def ch5_concept_1():
	return render_template('ch5_concept_1.html')

# ch5_manipulate_1 Questions Form Class
class ch5_QuestionsForm_1(Form):
    answer1 = TextAreaField('answer1')
    answer2 = TextAreaField('answer2')

@app.route('/ch5_manipulate_1', methods=['GET', 'POST'])
def ch5_manipulate_1():
	form = ch5_QuestionsForm_1(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data
		answer2 = form.answer2.data

		print(answer1)
		print(answer2)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch5_manipulate_1'))
	return render_template('ch5_manipulate_1.html', form = form)

@app.route('/ch5_manipulate_2')
def ch5_manipulate_2():
	return render_template('ch5_manipulate_2.html')

# ch6_concept_1 Questions Form Class
class ch6_QuestionsForm_1(Form):
    answer1 = TextAreaField('answer1')

@app.route('/ch6_concept_1', methods=['GET', 'POST'])
def ch6_concept_1():
	form = ch6_QuestionsForm_1(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data

		print(answer1)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch6_concept_1'))
	return render_template('ch6_concept_1.html', form = form)

# ch6_manipulate_1 Questions Form Class
class ch6_QuestionsForm_2(Form):
    answer1 = TextAreaField('answer1')
    answer2 = TextAreaField('answer2')

@app.route('/ch6_manipulate_1', methods=['GET', 'POST'])
def ch6_manipulate_1():
	form = ch6_QuestionsForm_2(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data
		answer2 = form.answer2.data

		print(answer1)
		print(answer2)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch6_manipulate_1'))
	return render_template('ch6_manipulate_1.html', form = form)

# ch6_manipulate_2 Questions Form Class
class ch6_QuestionsForm_3(Form):
    answer1 = TextAreaField('answer1')

@app.route('/ch6_manipulate_2', methods=['GET', 'POST'])
def ch6_manipulate_2():
	form = ch6_QuestionsForm_3(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data

		print(answer1)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch6_manipulate_2'))
	return render_template('ch6_manipulate_2.html', form = form)

# ch6_manipulate_3 Questions Form Class
class ch6_QuestionsForm_4(Form):
    answer1 = TextAreaField('answer1')
    answer2 = TextAreaField('answer2')

@app.route('/ch6_manipulate_3', methods=['GET', 'POST'])
def ch6_manipulate_3():
	form = ch6_QuestionsForm_4(request.form)
	if request.method == 'POST' and form.validate():
		answer1 = form.answer1.data
		answer2 = form.answer2.data

		print(answer1)
		print(answer2)

		flash('你送出你的回答了！真是太好了！', 'success')

		return redirect(url_for('ch6_manipulate_3'))
	return render_template('ch6_manipulate_3.html', form = form)

@app.route('/dragndrop')
def dragndrop():
	return render_template('dragndrop.html')

if __name__ == '__main__':
	app.secrect_key = 'secrect123'
	app.run(debug = True, host="0.0.0.0", port = 5000)