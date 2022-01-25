let read_fills = [];
for(const i of Array(10).keys()) {
	let read_fill = document.createElement('div');
	read_fill.className = 'read_fill';
	read_fills.push(read_fill);
}
let read_empties = document.querySelectorAll('.read_empty');

let iteration_button = document.querySelector('button');
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
	document.querySelector('button').innerText = '讀取圖片';
	document.querySelector('button').setAttribute('onclick', 'iteration()')
}


var step_time = 500;
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
		document.querySelector('button').innerText = iteration_text[iteration_num % 5];
		document.querySelector('button').setAttribute('onclick', 'start_iteration()')
	}

}


/*
function iteration() {
	for(i = 0; i < 10; i++) {
		if(read_empties[i].childElementCount) {
			read_empties[i].children[0].remove();
		}
	}

	var read_graph = setInterval(read_check, 5000);
	var graph_index = 0;
	function read_check() {
		if(graph_index == 10) {
			clearInterval(read_check);
		} else {
			console.log(graph_index);
			read_empties[graph_index].append(read_fills[graph_index]);

			var read_text = setInterval(read_text_change, 2000);
			function read_text_change() {
				var read_on_off = 0;
				if(read_on_off == 1) {
					clearInterval(read_text_change);
				} else {
					document.querySelector(".read_text").style.backgroundColor = "yellow";
					read_on_off++;
				}
			}

			var justify_text = setInterval(justify_text_change, 3000);
			function justify_text_change() {
				var justify_on_off = 0;
				if(justify_on_off == 1) {
					clearInterval(justify_text_change);
				} else {
					document.querySelector(".read_text").style.backgroundColor = "white";
					document.querySelector(".justify_text").style.backgroundColor = "yellow";
					justify_on_off++;
				}
			}

			var output_text = setInterval(output_text_change, 4000);
			function output_text_change() {
				var output_on_off = 0;
				if(output_on_off == 1) {
					clearInterval(output_text_change);
				} else {
					document.querySelector(".justify_text").style.backgroundColor = "white";
					document.querySelector(".output_text").style.backgroundColor = "yellow";
					output_on_off++;
				}
			}
			document.querySelector(".output_text").style.backgroundColor = "white";
			graph_index++;
		}
	}

	
	iteration_num++;
	if(iteration_num > 4) {
		iteration_num = 0;
	}
	iteration_button.innerText = iteration_text[iteration_num]
}
*/

/*
delay().then(function(){
	document.querySelector(".read_text").style.backgroundColor = "yellow";
	return delay(1000); // 延遲ㄧ秒
}).then(function(){
	document.querySelector(".justify_text").style.backgroundColor = "yellow";
	return delay(1000); // 延遲一秒
}).then(function(){
	document.querySelector(".output_text").style.backgroundColor = "yellow";
});
*/