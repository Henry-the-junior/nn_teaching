//document.getElementById("nn1_w1").value = 10;
//document.getElementById("nn1_w2").value = 25;
document.getElementById("health_nn_x1").value = 90;
document.getElementById("health_nn_x2").value = 70;
document.getElementById("health_nn_w1").value = 0.8;
document.getElementById("health_nn_w2").value = 0.7;

function nn1_count() {
	var nn1_w1 = document.getElementById("nn1_w1").value;
	var nn1_w2 = document.getElementById("nn1_w2").value;

	var y = 3 * parseFloat(nn1_w1) + 4 * parseFloat(nn1_w2);
	var error = 195 - y;

	if(isNaN(y) | isNaN(error)) {
		y = "Error";
		error = "Error";
		document.getElementById("nn1_y").innerText = y;
		document.getElementById("nn1_error").innerText = error;
	} else {
		document.getElementById("nn1_y").innerText = parseFloat(y.toFixed(2));
		document.getElementById("nn1_y").style.backgroundColor = "yellow";
		document.getElementById("nn1_error").innerText = parseFloat(error.toFixed(2));
		document.getElementById("nn1_error").style.backgroundColor = "yellow";
	}
}

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