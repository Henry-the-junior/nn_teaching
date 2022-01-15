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