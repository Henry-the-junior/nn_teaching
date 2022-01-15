const input_blocks = document.querySelectorAll(".input_block");

for(const input_block of input_blocks) {
	input_block.addEventListener('click', changeColors);
}

const blocks = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "b11", "b12", "b13", "b14", "b15", "b16"];
const positive = ["b2", "b5", "b7", "b10", "b12", "b15"]

function changeColors() {
	if(this.style.backgroundColor == "white") {
		this.style.backgroundColor = "black";
		var num_id = blocks.findIndex(block => block === this.id) + 1;
		document.querySelector("#n" + num_id).innerText = "1";
		if(positive.includes(this.id)) {
			var num = parseInt(document.querySelectorAll('.first_layer_num')[0].innerText);
			document.querySelectorAll('.first_layer_num')[0].innerText = num + 1;
		} else {
			var num = parseInt(document.querySelectorAll('.first_layer_num')[1].innerText);
			document.querySelectorAll('.first_layer_num')[1].innerText = num - 1;
		}

	} else {
		this.style.backgroundColor = "white";
		var num_id = blocks.findIndex(block => block === this.id) + 1;
		document.querySelector("#n" + num_id).innerText = "0";
		if(positive.includes(this.id)) {
			var num = parseInt(document.querySelectorAll('.first_layer_num')[0].innerText);
			document.querySelectorAll('.first_layer_num')[0].innerText = num - 1;
		} else {
			var num = parseInt(document.querySelectorAll('.first_layer_num')[1].innerText);
			document.querySelectorAll('.first_layer_num')[1].innerText = num + 1;
		}
	}
	var num1 = parseInt(document.querySelectorAll('.first_layer_num')[0].innerText);
	var num2 = parseInt(document.querySelectorAll('.first_layer_num')[1].innerText);
	document.querySelector('.second_layer_num').innerText = num1 + num2;

	if(document.querySelector('.second_layer_num').innerText == 6) {
		document.querySelector('.output_text').innerText = "相符";
		document.querySelector('.output_text').style.backgroundColor = "yellow";
	} else {
		document.querySelector('.output_text').innerText = "不相符";
		document.querySelector('.output_text').style.backgroundColor = "white";
	}

}