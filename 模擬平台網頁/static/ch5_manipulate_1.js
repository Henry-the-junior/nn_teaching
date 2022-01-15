function sign_count() {
	var x = document.getElementById("sign_x").value;
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
	
	
	document.getElementById("sign_y").innerText = y;
	document.getElementById("sign_y").style.backgroundColor = "yellow";
}

function step_count() {
	var x = document.getElementById("step_x").value;
	if(x) {
		if(x >= 0) {
			var y = "+1";
		} else if(x < 0) {
			var y = "0";
		} else {
			var y = "Error";
		}
	} else {
		var y = "Error";
	}
	
	
	document.getElementById("step_y").innerText = y;
	document.getElementById("step_y").style.backgroundColor = "yellow";
}

function sigmoid_count() {
	var x = document.getElementById("sigmoid_x").value;
	if(x) {
		var y = 1 / (1 + Math.pow(Math.E, parseFloat(-x)));
	} else {
		var y = "Error";
	}
	
	
	document.getElementById("sigmoid_y").innerText = parseFloat(y.toFixed(2));
	document.getElementById("sigmoid_y").style.backgroundColor = "yellow";
}

function ramp_count() {
	var x = document.getElementById("ramp_x").value;
	if(x) {
		if(x >= 0) {
			var y = x;
		} else if(x < 0) {
			var y = "0";
		} else {
			var y = "Error";
		}
	} else {
		var y = "Error";
	}
	
	
	document.getElementById("ramp_y").innerText = y;
	document.getElementById("ramp_y").style.backgroundColor = "yellow";
}