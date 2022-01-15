function nn1_count() {
	var nn1_x1 = document.getElementById("nn1_x1").value;
	var nn1_x2 = document.getElementById("nn1_x2").value;
	var nn1_w1 = document.getElementById("nn1_w1").value;
	var nn1_w2 = document.getElementById("nn1_w2").value;
	var nn1_theta = document.getElementById("nn1_theta").value;

	var y = parseFloat(nn1_x1) * parseFloat(nn1_w1) + parseFloat(nn1_x2) * parseFloat(nn1_w2) - parseFloat(nn1_theta);

	if(isNaN(y)) {
		y = "Error";
		document.getElementById("nn1_y").innerText = y;
	} else {
		if(y >= 0) {
			document.getElementById("nn1_y").innerText = "+1";
		} else {
			document.getElementById("nn1_y").innerText = "-1";
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