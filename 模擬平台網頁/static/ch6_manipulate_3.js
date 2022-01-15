function nn1_count() {
	var nn1_x1 = document.getElementById("nn1_x1").value;
	var nn1_x2 = document.getElementById("nn1_x2").value;
	var nn1_w1 = document.getElementById("nn1_w1").value;
	var nn1_w2 = document.getElementById("nn1_w2").value;
	var nn1_theta = document.getElementById("nn1_theta").value;
	var nn1_alpha = document.getElementById("nn1_alpha").value;
	var nn1_expect = document.getElementById("nn1_expect").value;

	var y = parseFloat(nn1_x1) * parseFloat(nn1_w1) + parseFloat(nn1_x2) * parseFloat(nn1_w2) - parseFloat(nn1_theta);
	
	if(isNaN(y)) {
		y = "Error";
		document.getElementById("nn1_y").innerText = y;
	} else {
		if(y >= 0) {
			document.getElementById("nn1_y").innerText = "+1";
			var nn1_error = parseFloat(nn1_expect) - 1;
		} else {
			document.getElementById("nn1_y").innerText = "0";
			var nn1_error = parseFloat(nn1_expect) - 0;
		}
		document.getElementById("nn1_y").style.backgroundColor = "yellow";
	}

	if(isNaN(nn1_error)) {
		nn1_error = "Error";
		document.getElementById("nn1_error").innerText = nn1_error;
	} else {
		document.getElementById("nn1_error").innerText = parseFloat(nn1_error.toFixed(2));
		document.getElementById("nn1_error").style.backgroundColor = "yellow";
	}

	var nn1_new_w1 = parseFloat(nn1_w1) + parseFloat(nn1_alpha) * parseFloat(nn1_x1) * parseFloat(nn1_error);
	var nn1_new_w2 = parseFloat(nn1_w2) + parseFloat(nn1_alpha) * parseFloat(nn1_x2) * parseFloat(nn1_error);

	if(isNaN(nn1_new_w1)) {
		nn1_new_w1 = "Error";
		document.getElementById("nn1_new_w1").innerText = nn1_new_w1;
	} else {
		document.getElementById("nn1_new_w1").innerText = parseFloat(nn1_new_w1.toFixed(2));
		document.getElementById("nn1_new_w1").style.backgroundColor = "yellow";
	}

	if(isNaN(nn1_new_w2)) {
		nn1_new_w2 = "Error";
		document.getElementById("nn1_new_w2").innerText = nn1_new_w2;
	} else {
		document.getElementById("nn1_new_w2").innerText = parseFloat(nn1_new_w2.toFixed(2));
		document.getElementById("nn1_new_w2").style.backgroundColor = "yellow";
	}

}

function nn2_count() {
	var nn2_x1 = document.getElementById("nn2_x1").value;
	var nn2_x2 = document.getElementById("nn2_x2").value;
	var nn2_w1 = document.getElementById("nn2_w1").value;
	var nn2_w2 = document.getElementById("nn2_w2").value;
	var nn2_theta = document.getElementById("nn2_theta").value;
	var nn2_alpha = document.getElementById("nn2_alpha").value;
	var nn2_expect = document.getElementById("nn2_expect").value;

	var y = parseFloat(nn2_x1) * parseFloat(nn2_w1) + parseFloat(nn2_x2) * parseFloat(nn2_w2) - parseFloat(nn2_theta);
	
	if(isNaN(y)) {
		y = "Error";
		document.getElementById("nn2_y").innerText = y;
	} else {
		if(y >= 0) {
			document.getElementById("nn2_y").innerText = "+1";
			var nn2_error = parseFloat(nn2_expect) - 1;
		} else {
			document.getElementById("nn2_y").innerText = "-1";
			var nn2_error = parseFloat(nn2_expect) + 1;
		}
		document.getElementById("nn2_y").style.backgroundColor = "yellow";
	}

	if(isNaN(nn2_error)) {
		nn2_error = "Error";
		document.getElementById("nn2_error").innerText = nn2_error;
	} else {
		document.getElementById("nn2_error").innerText = parseFloat(nn2_error.toFixed(2));
		document.getElementById("nn2_error").style.backgroundColor = "yellow";
	}

	var nn2_new_w1 = parseFloat(nn2_w1) + parseFloat(nn2_alpha) * parseFloat(nn2_x1) * parseFloat(nn2_error);
	var nn2_new_w2 = parseFloat(nn2_w2) + parseFloat(nn2_alpha) * parseFloat(nn2_x2) * parseFloat(nn2_error);

	if(isNaN(nn2_new_w1)) {
		nn2_new_w1 = "Error";
		document.getElementById("nn2_new_w1").innerText = nn2_new_w1;
	} else {
		document.getElementById("nn2_new_w1").innerText = parseFloat(nn2_new_w1.toFixed(2));
		document.getElementById("nn2_new_w1").style.backgroundColor = "yellow";
	}

	if(isNaN(nn2_new_w2)) {
		nn2_new_w2 = "Error";
		document.getElementById("nn2_new_w2").innerText = nn2_new_w2;
	} else {
		document.getElementById("nn2_new_w2").innerText = parseFloat(nn2_new_w2.toFixed(2));
		document.getElementById("nn2_new_w2").style.backgroundColor = "yellow";
	}

}

function nn3_count() {
	var nn3_x1 = document.getElementById("nn3_x1").value;
	var nn3_x2 = document.getElementById("nn3_x2").value;
	var nn3_w1 = document.getElementById("nn3_w1").value;
	var nn3_w2 = document.getElementById("nn3_w2").value;
	var nn3_theta = document.getElementById("nn3_theta").value;
	var nn3_alpha = document.getElementById("nn3_alpha").value;
	var nn3_expect = document.getElementById("nn3_expect").value;

	var X = parseFloat(nn3_x1) * parseFloat(nn3_w1) + parseFloat(nn3_x2) * parseFloat(nn3_w2) - parseFloat(nn3_theta);
	var y = 1 / (1 + Math.pow(Math.E, parseFloat(-X)));

	if(isNaN(y)) {
		y = "Error";
		document.getElementById("nn3_y").innerText = y;
	} else {
		document.getElementById("nn3_y").innerText = parseFloat(y.toFixed(2));
		document.getElementById("nn3_y").style.backgroundColor = "yellow";
		var nn3_error = parseFloat(nn3_expect) - y;
	}

	if(isNaN(nn3_error)) {
		nn3_error = "Error";
		document.getElementById("nn3_error").innerText = nn3_error;
	} else {
		document.getElementById("nn3_error").innerText = parseFloat(nn3_error.toFixed(2));
		document.getElementById("nn3_error").style.backgroundColor = "yellow";
	}

	var nn3_new_w1 = parseFloat(nn3_w1) + parseFloat(nn3_alpha) * parseFloat(nn3_x1) * parseFloat(nn3_error);
	var nn3_new_w2 = parseFloat(nn3_w2) + parseFloat(nn3_alpha) * parseFloat(nn3_x2) * parseFloat(nn3_error);

	if(isNaN(nn3_new_w1)) {
		nn3_new_w1 = "Error";
		document.getElementById("nn3_new_w1").innerText = nn3_new_w1;
	} else {
		document.getElementById("nn3_new_w1").innerText = parseFloat(nn3_new_w1.toFixed(2));
		document.getElementById("nn3_new_w1").style.backgroundColor = "yellow";
	}

	if(isNaN(nn3_new_w2)) {
		nn3_new_w2 = "Error";
		document.getElementById("nn3_new_w2").innerText = nn3_new_w2;
	} else {
		document.getElementById("nn3_new_w2").innerText = parseFloat(nn3_new_w2.toFixed(2));
		document.getElementById("nn3_new_w2").style.backgroundColor = "yellow";
	}

}

function nn4_count() {
	var nn4_x1 = document.getElementById("nn4_x1").value;
	var nn4_x2 = document.getElementById("nn4_x2").value;
	var nn4_w1 = document.getElementById("nn4_w1").value;
	var nn4_w2 = document.getElementById("nn4_w2").value;
	var nn4_theta = document.getElementById("nn4_theta").value;
	var nn4_alpha = document.getElementById("nn4_alpha").value;
	var nn4_expect = document.getElementById("nn4_expect").value;

	var X = parseFloat(nn4_x1) * parseFloat(nn4_w1) + parseFloat(nn4_x2) * parseFloat(nn4_w2) - parseFloat(nn4_theta);
	if(X >= 0) {
		var y = X;
	} else {
		var y = 0;
	}

	if(isNaN(y) | isNaN(X)) {
		y = "Error";
		document.getElementById("nn4_y").innerText = y;
	} else {
		document.getElementById("nn4_y").innerText = parseFloat(y.toFixed(2));
		document.getElementById("nn4_y").style.backgroundColor = "yellow";
		var nn4_error = parseFloat(nn4_expect) - y;
	}

	if(isNaN(nn4_error)) {
		nn4_error = "Error";
		document.getElementById("nn4_error").innerText = nn4_error;
	} else {
		document.getElementById("nn4_error").innerText = parseFloat(nn4_error.toFixed(2));
		document.getElementById("nn4_error").style.backgroundColor = "yellow";
	}

	var nn4_new_w1 = parseFloat(nn4_w1) + parseFloat(nn4_alpha) * parseFloat(nn4_x1) * parseFloat(nn4_error);
	var nn4_new_w2 = parseFloat(nn4_w2) + parseFloat(nn4_alpha) * parseFloat(nn4_x2) * parseFloat(nn4_error);

	if(isNaN(nn4_new_w1)) {
		nn4_new_w1 = "Error";
		document.getElementById("nn4_new_w1").innerText = nn4_new_w1;
	} else {
		document.getElementById("nn4_new_w1").innerText = parseFloat(nn4_new_w1.toFixed(2));
		document.getElementById("nn4_new_w1").style.backgroundColor = "yellow";
	}

	if(isNaN(nn4_new_w2)) {
		nn4_new_w2 = "Error";
		document.getElementById("nn4_new_w2").innerText = nn4_new_w2;
	} else {
		document.getElementById("nn4_new_w2").innerText = parseFloat(nn4_new_w2.toFixed(2));
		document.getElementById("nn4_new_w2").style.backgroundColor = "yellow";
	}

}