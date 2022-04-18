function count() {
	var x = document.getElementById("x").value;
	if(x) {
		if(x >= 0) {
			var y = "+1";
		} else if(x < 0) {
			var y = "-1";
		} else {
			var y = "Error";
		}
	} else {
		var y = "Error";
	}
	
	
	document.getElementById("y").innerText = y;
	document.getElementById("y").style.backgroundColor = "yellow";
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
			document.getElementById("skills").style.backgroundColor = "green";
		} else {
			var health_or_sick = document.createElement('div');
			health_or_sick.className = "health_or_sick";
			health_or_sick.style.backgroundImage = "url(../static/images/sick.png)";
			document.getElementById("skills").style.backgroundColor = "red";
		}
	}

	health_nn.append(health_or_sick);
	document.getElementById("skills").innerText = y;
	document.getElementById("skills").style.width = y + "%";
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