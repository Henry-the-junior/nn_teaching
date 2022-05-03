function putAxis() {

	let element = document.querySelector('.axis');
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}


	const length = document.querySelector('#length').value;
	const width = document.querySelector('#width').value;

	const input_image = document.createElement('div');
	input_image.className = "input_image";
	input_image.style.width = (length * 20) + "px";
	input_image.style.height = (width * 20) + "px";

	input_image.style.marginTop = (345 - 33 * width - 10 * width) + "px";
	input_image.style.marginLeft = (83 + 33 * length - 10 * length) + "px";


	if (document.querySelector("#ladybug").checked) {
		input_image.style.backgroundImage = "url(../static/images/ladybug.png)";
	}

	if (document.querySelector("#caterpillar").checked) {
		input_image.style.backgroundImage = "url(../static/images/caterpillar.png)";
	}



	input_image.style.backgroundSize = (length * 20) + "px" + " " + (width * 20) + "px";

	const axis = document.querySelector('.axis');

	axis.append(input_image);

}

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
		document.getElementById("nn1_error").innerText = nn1_error;
		document.getElementById("nn1_error").style.backgroundColor = "yellow";
	}

	var nn1_new_w1 = parseFloat(nn1_w1) + parseFloat(nn1_alpha) * parseFloat(nn1_x1) * parseFloat(nn1_error);
	var nn1_new_w2 = parseFloat(nn1_w2) + parseFloat(nn1_alpha) * parseFloat(nn1_x2) * parseFloat(nn1_error);

	if(isNaN(nn1_new_w1)) {
		nn1_new_w1 = "Error";
		document.getElementById("nn1_new_w1").innerText = nn1_new_w1;
	} else {
		document.getElementById("nn1_new_w1").innerText = nn1_new_w1.toFixed(2);
		document.getElementById("nn1_new_w1").style.backgroundColor = "yellow";
	}

	if(isNaN(nn1_new_w2)) {
		nn1_new_w2 = "Error";
		document.getElementById("nn1_new_w2").innerText = nn1_new_w2;
	} else {
		document.getElementById("nn1_new_w2").innerText = nn1_new_w2.toFixed(2);
		document.getElementById("nn1_new_w2").style.backgroundColor = "yellow";
	}

}

let nn2_button = document.querySelectorAll('button')[2];
let nn2_text = ['進行第一次迭代', '進行第二次迭代', '進行第三次迭代', '進行第四次迭代', '進行第五次迭代'];
let nn2_num = 0;

let nn2_X = [[5, 2], [4.5, 2.5], [3, 4], [2.5, 3]];
let nn2_expects = [1, 1, 0, 0];
let nn2_Y = [[1, 1, 1, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 1, 0, 1], [1, 1, 0, 0]];
let nn2_errors = [[0, 0, -1, 0], [1, 0, -1, 0], [1, 0, -1, 0], [1, 0, 0, -1], [0, 0, 0, 0]];
let nn2_new_Ws = [[[0.3, 0.1], [0.3, 0.1], [-0.3, -0.7], [-0.3, -0.7]],
				  [[0.7, -0.3], [0.7, -0.3], [0.1, -1.1], [0.1, -1.1]],
				  [[1.1, -0.7], [1.1, -0.7], [0.5, -1.5], [0.5, -1.5]],
				  [[1.5, -1.1], [1.5, -1.1], [1.5, -1.1], [1, -1.7]],
				  [[1, -1.7], [1, -1.7], [1, -1.7], [1, -1.7]]];

let read_sign = document.createElement('div');
read_sign.className = 'read_sign';
let read_sign_block = document.querySelectorAll('.read_sign_block');

function nn2_count() {
	delay().then(function(){
		read_sign_block[0].append(read_sign);
		document.getElementById("nn2_x1").innerText = nn2_X[0][0];
		document.getElementById("nn2_x2").innerText = nn2_X[0][1];
		document.getElementById("nn2_y").innerText = nn2_Y[nn2_num - 1][0];
		document.getElementById("nn2_expect").innerText = nn2_expects[0];
		document.getElementById("nn2_x1").style.backgroundColor = "yellow";
		document.getElementById("nn2_x2").style.backgroundColor = "yellow";
		document.getElementById("nn2_y").style.backgroundColor = "yellow";
		document.getElementById("nn2_expect").style.backgroundColor = "yellow";
		return delay(step_time);
	}).then(function(){
		document.getElementById("nn2_x1").style.backgroundColor = "white";
		document.getElementById("nn2_x2").style.backgroundColor = "white";
		document.getElementById("nn2_y").style.backgroundColor = "white";
		document.getElementById("nn2_expect").style.backgroundColor = "white";
		document.getElementById("nn2_error").innerText = nn2_errors[nn2_num - 1][0];
		document.getElementById("nn2_error").style.backgroundColor = "red";
		return delay(step_time);
	}).then(function(){
		document.getElementById("nn2_error").style.backgroundColor = "white";
		document.getElementById("nn2_new_w1").style.backgroundColor = "red";
		document.getElementById("nn2_new_w2").style.backgroundColor = "red";
		document.getElementById("nn2_new_w1").innerText = nn2_new_Ws[nn2_num - 1][0][0];
		document.getElementById("nn2_new_w2").innerText = nn2_new_Ws[nn2_num - 1][0][1];
		document.getElementById("nn2_w1").style.backgroundColor = "red";
		document.getElementById("nn2_w2").style.backgroundColor = "red";
		document.getElementById("nn2_w1").innerText = nn2_new_Ws[nn2_num - 1][0][0];
		document.getElementById("nn2_w2").innerText = nn2_new_Ws[nn2_num - 1][0][1];
		return delay(step_time);
	}).then(function(){
		document.getElementById("nn2_new_w1").style.backgroundColor = "white";
		document.getElementById("nn2_new_w2").style.backgroundColor = "white";
		document.getElementById("nn2_w1").style.backgroundColor = "white";
		document.getElementById("nn2_w2").style.backgroundColor = "white";
		return delay(step_time);
	}).then(function(){
		read_sign_block[0].children[0].remove()
		read_sign_block[1].append(read_sign);
		document.getElementById("nn2_x1").innerText = nn2_X[1][0];
		document.getElementById("nn2_x2").innerText = nn2_X[1][1];
		document.getElementById("nn2_y").innerText = nn2_Y[nn2_num - 1][1];
		document.getElementById("nn2_expect").innerText = nn2_expects[1];
		document.getElementById("nn2_x1").style.backgroundColor = "yellow";
		document.getElementById("nn2_x2").style.backgroundColor = "yellow";
		document.getElementById("nn2_y").style.backgroundColor = "yellow";
		document.getElementById("nn2_expect").style.backgroundColor = "yellow";
		return delay(step_time);
	}).then(function(){
		document.getElementById("nn2_x1").style.backgroundColor = "white";
		document.getElementById("nn2_x2").style.backgroundColor = "white";
		document.getElementById("nn2_y").style.backgroundColor = "white";
		document.getElementById("nn2_expect").style.backgroundColor = "white";
		document.getElementById("nn2_error").innerText = nn2_errors[nn2_num - 1][1];
		document.getElementById("nn2_error").style.backgroundColor = "red";
		return delay(step_time);
	}).then(function(){
		document.getElementById("nn2_error").style.backgroundColor = "white";
		document.getElementById("nn2_new_w1").style.backgroundColor = "red";
		document.getElementById("nn2_new_w2").style.backgroundColor = "red";
		document.getElementById("nn2_new_w1").innerText = nn2_new_Ws[nn2_num - 1][1][0];
		document.getElementById("nn2_new_w2").innerText = nn2_new_Ws[nn2_num - 1][1][1];
		document.getElementById("nn2_w1").style.backgroundColor = "red";
		document.getElementById("nn2_w2").style.backgroundColor = "red";
		document.getElementById("nn2_w1").innerText = nn2_new_Ws[nn2_num - 1][1][0];
		document.getElementById("nn2_w2").innerText = nn2_new_Ws[nn2_num - 1][1][1];
		return delay(step_time);
	}).then(function(){
		document.getElementById("nn2_new_w1").style.backgroundColor = "white";
		document.getElementById("nn2_new_w2").style.backgroundColor = "white";
		document.getElementById("nn2_w1").style.backgroundColor = "white";
		document.getElementById("nn2_w2").style.backgroundColor = "white";
		return delay(step_time);
	}).then(function(){
		read_sign_block[1].children[0].remove()
		read_sign_block[2].append(read_sign);
		document.getElementById("nn2_x1").innerText = nn2_X[2][0];
		document.getElementById("nn2_x2").innerText = nn2_X[2][1];
		document.getElementById("nn2_y").innerText = nn2_Y[nn2_num - 1][2];
		document.getElementById("nn2_expect").innerText = nn2_expects[2];
		document.getElementById("nn2_x1").style.backgroundColor = "yellow";
		document.getElementById("nn2_x2").style.backgroundColor = "yellow";
		document.getElementById("nn2_y").style.backgroundColor = "yellow";
		document.getElementById("nn2_expect").style.backgroundColor = "yellow";
		return delay(step_time);
	}).then(function(){
		document.getElementById("nn2_x1").style.backgroundColor = "white";
		document.getElementById("nn2_x2").style.backgroundColor = "white";
		document.getElementById("nn2_y").style.backgroundColor = "white";
		document.getElementById("nn2_expect").style.backgroundColor = "white";
		document.getElementById("nn2_error").innerText = nn2_errors[nn2_num - 1][2];
		document.getElementById("nn2_error").style.backgroundColor = "red";
		return delay(step_time);
	}).then(function(){
		document.getElementById("nn2_error").style.backgroundColor = "white";
		document.getElementById("nn2_new_w1").style.backgroundColor = "red";
		document.getElementById("nn2_new_w2").style.backgroundColor = "red";
		document.getElementById("nn2_new_w1").innerText = nn2_new_Ws[nn2_num - 1][2][0];
		document.getElementById("nn2_new_w2").innerText = nn2_new_Ws[nn2_num - 1][2][1];
		document.getElementById("nn2_w1").style.backgroundColor = "red";
		document.getElementById("nn2_w2").style.backgroundColor = "red";
		document.getElementById("nn2_w1").innerText = nn2_new_Ws[nn2_num - 1][2][0];
		document.getElementById("nn2_w2").innerText = nn2_new_Ws[nn2_num - 1][2][1];
		return delay(step_time);
	}).then(function(){
		document.getElementById("nn2_new_w1").style.backgroundColor = "white";
		document.getElementById("nn2_new_w2").style.backgroundColor = "white";
		document.getElementById("nn2_w1").style.backgroundColor = "white";
		document.getElementById("nn2_w2").style.backgroundColor = "white";
		return delay(step_time);
	}).then(function(){
		read_sign_block[2].children[0].remove()
		read_sign_block[3].append(read_sign);
		document.getElementById("nn2_x1").innerText = nn2_X[3][0];
		document.getElementById("nn2_x2").innerText = nn2_X[3][1];
		document.getElementById("nn2_y").innerText = nn2_Y[nn2_num - 1][3];
		document.getElementById("nn2_expect").innerText = nn2_expects[3];
		document.getElementById("nn2_x1").style.backgroundColor = "yellow";
		document.getElementById("nn2_x2").style.backgroundColor = "yellow";
		document.getElementById("nn2_y").style.backgroundColor = "yellow";
		document.getElementById("nn2_expect").style.backgroundColor = "yellow";
		return delay(step_time);
	}).then(function(){
		document.getElementById("nn2_x1").style.backgroundColor = "white";
		document.getElementById("nn2_x2").style.backgroundColor = "white";
		document.getElementById("nn2_y").style.backgroundColor = "white";
		document.getElementById("nn2_expect").style.backgroundColor = "white";
		document.getElementById("nn2_error").innerText = nn2_errors[nn2_num - 1][3];
		document.getElementById("nn2_error").style.backgroundColor = "red";
		return delay(step_time);
	}).then(function(){
		document.getElementById("nn2_error").style.backgroundColor = "white";
		document.getElementById("nn2_new_w1").style.backgroundColor = "red";
		document.getElementById("nn2_new_w2").style.backgroundColor = "red";
		document.getElementById("nn2_new_w1").innerText = nn2_new_Ws[nn2_num - 1][3][0];
		document.getElementById("nn2_new_w2").innerText = nn2_new_Ws[nn2_num - 1][3][1];
		document.getElementById("nn2_w1").style.backgroundColor = "red";
		document.getElementById("nn2_w2").style.backgroundColor = "red";
		document.getElementById("nn2_w1").innerText = nn2_new_Ws[nn2_num - 1][3][0];
		document.getElementById("nn2_w2").innerText = nn2_new_Ws[nn2_num - 1][3][1];
		return delay(step_time);
	}).then(function(){
		read_sign_block[3].children[0].remove()
		document.getElementById("nn2_new_w1").style.backgroundColor = "white";
		document.getElementById("nn2_new_w2").style.backgroundColor = "white";
		document.getElementById("nn2_w1").style.backgroundColor = "white";
		document.getElementById("nn2_w2").style.backgroundColor = "white";
		return delay(step_time);
	});

	nn2_num++;
	if(nn2_num > 5) {
		nn2_num = 1;
	}
	nn2_button.innerText = nn2_text[nn2_num % 5]
}

let read_fills = [];
for(const i of Array(10).keys()) {
	let read_fill = document.createElement('div');
	read_fill.className = 'read_fill';
	read_fills.push(read_fill);
}
let read_empties = document.querySelectorAll('.read_empty');

let iteration_button = document.querySelector('#start_iteration');
let iteration_text = ['進行第一次迭代', '進行第二次迭代', '進行第三次迭代', '進行第四次迭代', '進行第五次迭代'];
let iteration_num = 0;

let image_index = 0;

let p_matrix = [[[0.31, 0.33], [0.29, 0.35], [0.29, 0.36], [0.30, 0.39], [0.28, 0.39], [0.40, 0.30], [0.41, 0.30], [0.41, 0.27], [0.42, 0.26], [0.42, 0.25]],
 				[[0.27, 0.40], [0.28, 0.43], [0.26, 0.42], [0.25, 0.42], [0.24, 0.45], [0.44, 0.24], [0.44, 0.23], [0.43, 0.21], [0.45, 0.21], [0.45, 0.21]],
 				[[0.24, 0.47], [0.23, 0.50], [0.22, 0.52], [0.22, 0.52], [0.23, 0.53], [0.46, 0.21], [0.47, 0.21], [0.49, 0.19], [0.49, 0.20], [0.51, 0.19]],
 				[[0.21, 0.54], [0.20, 0.56], [0.20, 0.56], [0.19, 0.57], [0.18, 0.59], [0.54, 0.19], [0.55, 0.18], [0.56, 0.17], [0.58, 0.17], [0.60, 0.16]],
 				[[0.16, 0.60], [0.16, 0.64], [0.14, 0.64], [0.12, 0.65], [0.12, 0.68], [0.63, 0.15], [0.63, 0.13], [0.65, 0.12], [0.67, 0.11], [0.70, 0.09]]];

var delay = function(s){
  return new Promise(function(resolve,reject){
   setTimeout(resolve,s); 
  });
};

function start_iteration() {
	image_index = 0;
	iteration_num++;
	document.querySelector('#start_iteration').innerText = '讀取圖片';
	document.querySelector('#start_iteration').setAttribute('onclick', 'iteration()')
}


var step_time = 1000;
function iteration() {
	for(i = 0; i < 10; i++) {
		if(read_empties[i].childElementCount) {
			read_empties[i].children[0].remove();
		}
	}

	delay().then(function(){
		for(i = 0; i < image_index; i++) {
			read_empties[i].append(read_fills[i]);
		}
		return delay(step_time); // 延遲ㄧ秒
	}).then(function(){
		document.querySelector(".read_text").style.backgroundColor = "yellow";
		return delay(step_time); // 延遲一秒
	}).then(function(){
		document.querySelector(".read_text").style.backgroundColor = "white";
		document.querySelector(".justify_text").style.backgroundColor = "yellow";
		return delay(step_time); // 延遲一秒
	}).then(function(){
		document.querySelectorAll('.weight_num')[0].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_text')[0].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_num')[0].innerText = Math.random().toFixed(1);
		return delay(step_time); // 延遲一秒
	}).then(function(){
		document.querySelectorAll('.weight_num')[0].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_text')[0].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_num')[1].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_text')[1].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_num')[1].innerText = Math.random().toFixed(1);
		return delay(step_time); // 延遲一秒
	}).then(function(){
		document.querySelectorAll('.weight_num')[1].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_text')[1].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_num')[2].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_text')[2].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_num')[2].innerText = Math.random().toFixed(1);
		return delay(step_time); // 延遲一秒
	}).then(function(){
		document.querySelectorAll('.weight_num')[2].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_text')[2].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_num')[3].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_text')[3].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_num')[3].innerText = Math.random().toFixed(1);
		return delay(step_time); // 延遲一秒
	}).then(function(){
		document.querySelectorAll('.weight_num')[3].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_text')[3].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_num')[4].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_text')[4].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_num')[4].innerText = Math.random().toFixed(1);
		return delay(step_time); // 延遲一秒
	}).then(function(){
		document.querySelectorAll('.weight_num')[4].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_text')[4].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_num')[5].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_text')[5].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_num')[5].innerText = Math.random().toFixed(1);
		return delay(step_time); // 延遲一秒
	}).then(function(){
		document.querySelectorAll('.weight_num')[5].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_text')[5].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_num')[6].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_text')[6].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_num')[6].innerText = Math.random().toFixed(1);
		return delay(step_time); // 延遲一秒
	}).then(function(){
		document.querySelectorAll('.weight_num')[6].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_text')[6].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_num')[7].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_text')[7].style.backgroundColor = "yellow";
		document.querySelectorAll('.weight_num')[7].innerText = Math.random().toFixed(1);
		return delay(step_time); // 延遲一秒
	}).then(function(){
		document.querySelectorAll('.weight_num')[7].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelectorAll('.weight_text')[7].style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelector(".justify_text").style.backgroundColor = "white";
		document.querySelector(".output_text").style.backgroundColor = "yellow";
		return delay(step_time); // 延遲一秒
	}).then(function(){
		document.querySelector(".dog_p_num").style.backgroundColor = "red";
		document.querySelector(".cat_p_num").style.backgroundColor = "red";
		document.querySelector(".dog_p_num").innerText = p_matrix[iteration_num - 1][image_index - 1][0]
		document.querySelector(".cat_p_num").innerText = p_matrix[iteration_num - 1][image_index - 1][1]
		return delay(step_time); // 延遲一秒
	}).then(function(){
		document.querySelector(".dog_p_num").style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelector(".cat_p_num").style.backgroundColor = "rgba(255, 255, 255, 0)";
		document.querySelector(".output_text").style.backgroundColor = "white";
		return delay(step_time); // 延遲一秒
	});

	if(iteration_num > 5) {
		iteration_num = 1;
	}

	image_index++;
	if(image_index > 9) {
		document.querySelector('#start_iteration').innerText = iteration_text[iteration_num % 5];
		document.querySelector('#start_iteration').setAttribute('onclick', 'start_iteration()')
	}

}