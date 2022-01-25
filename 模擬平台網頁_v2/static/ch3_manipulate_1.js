document.getElementById("nn1_w1").value = 10;
document.getElementById("nn1_w2").value = 25;

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