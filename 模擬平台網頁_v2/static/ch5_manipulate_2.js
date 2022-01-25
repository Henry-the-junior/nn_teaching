function nn1_count() {
	var nn1_x1 = document.getElementById("nn1_x1").value;
	var nn1_x2 = document.getElementById("nn1_x2").value;
	var nn1_x3 = document.getElementById("nn1_x3").value;
	var nn1_w1 = document.getElementById("nn1_w1").value;
	var nn1_w2 = document.getElementById("nn1_w2").value;
	var nn1_w3 = document.getElementById("nn1_w3").value;
	var nn1_theta = document.getElementById("nn1_theta").value;

	var y = parseFloat(nn1_x1) * parseFloat(nn1_w1) + parseFloat(nn1_x2) * parseFloat(nn1_w2) + parseFloat(nn1_x3) * parseFloat(nn1_w3) - parseFloat(nn1_theta);

	if(isNaN(y)) {
		y = "Error";
		document.getElementById("nn1_y").innerText = y;
	} else {
		if(y >= 0) {
			document.getElementById("nn1_y").innerText = "+1";
		} else {
			document.getElementById("nn1_y").innerText = "0";
		}
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
	var nn2_theta = document.getElementById("nn2_theta").value;

	var y = parseFloat(nn2_x1) * parseFloat(nn2_w1) + parseFloat(nn2_x2) * parseFloat(nn2_w2) + parseFloat(nn2_x3) * parseFloat(nn2_w3) - parseFloat(nn2_theta);

	if(isNaN(y)) {
		y = "Error";
		document.getElementById("nn2_y").innerText = y;
	} else {
		if(y >= 0) {
			document.getElementById("nn2_y").innerText = "+1";
		} else {
			document.getElementById("nn2_y").innerText = "-1";
		}
		document.getElementById("nn2_y").style.backgroundColor = "yellow";
	}
}

function nn3_count() {
	var nn3_x1 = document.getElementById("nn3_x1").value;
	var nn3_x2 = document.getElementById("nn3_x2").value;
	var nn3_x3 = document.getElementById("nn3_x3").value;
	var nn3_w1 = document.getElementById("nn3_w1").value;
	var nn3_w2 = document.getElementById("nn3_w2").value;
	var nn3_w3 = document.getElementById("nn3_w3").value;
	var nn3_theta = document.getElementById("nn3_theta").value;

	var X = parseFloat(nn3_x1) * parseFloat(nn3_w1) + parseFloat(nn3_x2) * parseFloat(nn3_w2) + parseFloat(nn3_x3) * parseFloat(nn3_w3) - parseFloat(nn3_theta);
	var y = 1 / (1 + Math.pow(Math.E, parseFloat(-X)));

	if(isNaN(y)) {
		y = "Error";
		document.getElementById("nn3_y").innerText = y;
	} else {
		document.getElementById("nn3_y").innerText = parseFloat(y.toFixed(2));
		document.getElementById("nn3_y").style.backgroundColor = "yellow";
	}
}

function nn4_count() {
	var nn4_x1 = document.getElementById("nn4_x1").value;
	var nn4_x2 = document.getElementById("nn4_x2").value;
	var nn4_x3 = document.getElementById("nn4_x3").value;
	var nn4_w1 = document.getElementById("nn4_w1").value;
	var nn4_w2 = document.getElementById("nn4_w2").value;
	var nn4_w3 = document.getElementById("nn4_w3").value;
	var nn4_theta = document.getElementById("nn4_theta").value;

	var y = parseFloat(nn4_x1) * parseFloat(nn4_w1) + parseFloat(nn4_x2) * parseFloat(nn4_w2) + parseFloat(nn4_x3) * parseFloat(nn4_w3) - parseFloat(nn4_theta);

	if(isNaN(y)) {
		y = "Error";
		document.getElementById("nn4_y").innerText = y;
	} else {
		if(y >= 0) {
			document.getElementById("nn4_y").innerText = y;
		} else {
			document.getElementById("nn4_y").innerText = "0";
		}
		document.getElementById("nn4_y").style.backgroundColor = "yellow";
	}
}