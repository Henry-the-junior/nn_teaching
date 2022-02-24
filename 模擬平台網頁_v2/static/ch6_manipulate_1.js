//當時要把跳遠的例子改成機器人齒輪，
//變數的命名與html上的命名還來不及改。

function jump() {
	var jumper1_input = document.getElementById("jumper1_input").value;
	var jumper2_input = document.getElementById("jumper2_input").value;

	//let jumper1_result = document.querySelector('.jumper1_result');
	//while (jumper1_result.firstChild) {
	//	jumper1_result.removeChild(jumper1_result.firstChild);
	//}

	//let jumper2_result = document.querySelector('.jumper2_result');
	//while (jumper2_result.firstChild) {
	//	jumper2_result.removeChild(jumper2_result.firstChild);
	//}

	let output_zone1 = document.querySelector('.output_zone1');
	while (output_zone1.firstChild) {
		output_zone1.removeChild(output_zone1.firstChild);
	}

	//var empty_div = document.createElement('div');
	//jumper1_result.append(empty_div);

	//var empty_div = document.createElement('div');
	//jumper2_result.append(empty_div);

	var empty_div = document.createElement('div');
	output_zone1.append(empty_div);

	var step;
	//for (step = 0; step < jumper1_input; step++) {
	//	var img_eight = document.createElement('img');
	//	img_eight.src = "/static/images/ch6_eight.png";
	//	img_eight.width = "160";
	//	img_eight.style = "margin-top: auto; margin-bottom: 0px;";
	//	jumper1_result.append(img_eight);
	//}

	//var img_jumper1 = document.createElement('img');
	//img_jumper1.src = "/static/images/jumper1.png";
	//img_jumper1.width = "70";
	//img_jumper1.style = "margin-top: auto; margin-bottom: 0px;";
	//jumper1_result.append(img_jumper1);

	for (step = 0; step < jumper1_input; step++) {
		var img_eight = document.createElement('img');
		img_eight.src = "/static/images/ch6_eight.png";
		img_eight.width = "160";
		img_eight.style = "margin-top: auto; margin-bottom: 0px;";
		output_zone1.append(img_eight);

		var empty_div = document.createElement('div');
		output_zone1.append(empty_div);
		var empty_div = document.createElement('div');
		output_zone1.append(empty_div);
		var empty_div = document.createElement('div');
		output_zone1.append(empty_div);
	}

	//for (step = 0; step < jumper2_input; step++) {
	//	var img_two = document.createElement('img');
	//	img_two.src = "/static/images/ch6_two.png";
	//	img_two.width = "40";
	//	img_two.style = "margin-top: auto; margin-bottom: 0px;";
	//	jumper2_result.append(img_two);
	//}

	for (step = 0; step < jumper2_input; step++) {
		var img_two = document.createElement('img');
		img_two.src = "/static/images/ch6_two.png";
		img_two.width = "40";
		img_two.style = "margin-top: auto; margin-bottom: 0px;";
		output_zone1.append(img_two);
	}

	var img_robot = document.createElement('img');
	img_robot.src = "/static/images/ch6_robot.png";
	img_robot.width = "300";
	img_robot.style = "margin-top: auto; margin-bottom: 0px;";
	output_zone1.append(img_robot);

	//var img_jumper2 = document.createElement('img');
	//img_jumper2.src = "/static/images/jumper2.png";
	//img_jumper2.width = "70";
	//img_jumper2.style = "margin-top: auto; margin-bottom: 0px;";
	//jumper2_result.append(img_jumper2);

	var sum = document.getElementById("sum");
	var error = document.getElementById("error");

	sum.innerText = jumper1_input * 8 + jumper2_input * 2 + "個單位";
	error.innerText = (50 - jumper1_input * 8 - jumper2_input * 2) + "個單位";


}

document.getElementById("health_nn_x1").value = 90;
document.getElementById("health_nn_x2").value = 70;
document.getElementById("health_nn_w1").value = 0;
document.getElementById("health_nn_w2").value = 0;

function health_nn_count() {
	var health_nn_x1 = document.getElementById("health_nn_x1").value;
	var health_nn_x2 = document.getElementById("health_nn_x2").value;
	var health_nn_w1 = document.getElementById("health_nn_w1").value;
	var health_nn_w2 = document.getElementById("health_nn_w2").value;

	var y = parseFloat(health_nn_x1) * parseFloat(health_nn_w1) + parseFloat(health_nn_x2) * parseFloat(health_nn_w2);

	var health_nn = document.querySelector('.health_nn');
	while (health_nn.lastChild.className == "health_or_sick") {
		health_nn.removeChild(health_nn.lastChild);
	}

	if(isNaN(y)) {
		y = "Error";
		document.getElementById("health_nn_y").innerText = y;

		var health_or_sick = document.createElement('div');
		health_or_sick.className = "health_or_sick";
		health_or_sick.style.backgroundImage = "";
	} else {
		document.getElementById("health_nn_y").innerText = parseFloat(y.toFixed(2));
		document.getElementById("health_nn_y").style.backgroundColor = "yellow";
		if(y >= 70) {
			var health_or_sick = document.createElement('div');
			health_or_sick.className = "health_or_sick";
			health_or_sick.style.backgroundImage = "url(../static/images/health.png)";
		} else {
			var health_or_sick = document.createElement('div');
			health_or_sick.className = "health_or_sick";
			health_or_sick.style.backgroundImage = "url(../static/images/sick.png)";
		}
	}

	health_nn.append(health_or_sick);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function blood_pressure_count() {
	var x1 = getRandomInt(80, 160);
	var x2 = x1 - getRandomInt(20, 60);
	document.getElementById("blood_pressure_x1").innerText = x1;
	document.getElementById("blood_pressure_x2").innerText = x2;
}

var audio = document.getElementById("audio");

function heartSound() {
	audio.play();
}