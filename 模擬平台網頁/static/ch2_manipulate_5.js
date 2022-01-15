function nn1_count() {
	var nn1_x1 = document.getElementById("nn1_x1").value;
	var nn1_x2 = document.getElementById("nn1_x2").value;
	var nn1_w1 = document.getElementById("nn1_w1").value;
	var nn1_w2 = document.getElementById("nn1_w2").value;

	var y = parseFloat(nn1_x1) * parseFloat(nn1_w1) + parseFloat(nn1_x2) * parseFloat(nn1_w2);

	if(isNaN(y)) {
		y = "Error";
		document.getElementById("nn1_y").innerText = y;
	} else {
		document.getElementById("nn1_y").innerText = parseFloat(y.toFixed(2));
		document.getElementById("nn1_y").style.backgroundColor = "yellow";
	}
}

function nn2_count() {
	var nn2_x1 = document.getElementById("nn2_x1").value;
	var nn2_x2 = document.getElementById("nn2_x2").value;
	var nn2_x3 = document.getElementById("nn2_x3").value;
	var nn2_w1 = document.getElementById("nn2_w1").value;
	var nn2_w2 = document.getElementById("nn2_w2").value;
	var nn2_w3 = document.getElementById("nn2_w3").value;

	var y = parseFloat(nn2_x1) * parseFloat(nn2_w1) + parseFloat(nn2_x2) * parseFloat(nn2_w2) + parseFloat(nn2_x3) * parseFloat(nn2_w3);

	if(isNaN(y)) {
		y = "Error";
		document.getElementById("nn2_y").innerText = parseFloat(y.toFixed(2));
	} else {
		document.getElementById("nn2_y").innerText = parseFloat(y.toFixed(2));
		document.getElementById("nn2_y").style.backgroundColor = "yellow";
	}
}

function health_nn_count() {
	var health_nn_x1 = document.getElementById("health_nn_x1").value;
	var health_nn_x2 = document.getElementById("health_nn_x2").value;

	var y = parseFloat(health_nn_x1) * 0.7 + parseFloat(health_nn_x2) * 0.5;

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