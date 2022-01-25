function nn1_count() {
	var nn1_x1 = document.getElementById("nn1_x1").value;
	var nn1_x2 = document.getElementById("nn1_x2").value;
	var nn1_w1 = document.getElementById("nn1_w1").value;
	var nn1_w2 = document.getElementById("nn1_w2").value;
	var nn1_expect = document.getElementById("nn1_expect").value;

	var y = parseFloat(nn1_x1) * parseFloat(nn1_w1) + parseFloat(nn1_x2) * parseFloat(nn1_w2);
	var error = parseFloat(nn1_expect) - y;

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