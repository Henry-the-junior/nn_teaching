const dog_fills = document.querySelectorAll('.dog_fill');
const cat_fills = document.querySelectorAll('.cat_fill');
const dog_empties = document.querySelectorAll('.dog_empty');
const cat_empties = document.querySelectorAll('.cat_empty');
const empties = document.querySelectorAll('.empty');

//Fill Listeners
for(const dog_fill of dog_fills) {
	dog_fill.addEventListener('dragstart', dragStart);
	dog_fill.addEventListener('dragend', dragEnd);
}

for(const cat_fill of cat_fills) {
	cat_fill.addEventListener('dragstart', dragStart);
	cat_fill.addEventListener('dragend', dragEnd);
}


//Loop through empties and call drag events
for(const empty of empties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

for(const dog_empty of dog_empties) {
	dog_empty.addEventListener('dragover', dragOver);
	dog_empty.addEventListener('dragenter', dragEnter);
	dog_empty.addEventListener('dragleave', dragLeave);
	dog_empty.addEventListener('drop', dragDrop);
}

for(const cat_empty of cat_empties) {
	cat_empty.addEventListener('dragover', dragOver);
	cat_empty.addEventListener('dragenter', dragEnter);
	cat_empty.addEventListener('dragleave', dragLeave);
	cat_empty.addEventListener('drop', dragDrop);
}

let dog_fill = null;
let cat_fill = null;

//Drag Functions
function dragStart() {
	if(this.className == 'dog_fill') {
		dog_fill = this;
	}
	if(this.className == 'cat_fill') {
		cat_fill = this;
	}
	this.className += ' hold';
	setTimeout(() => (this.className = 'invisible'), 0);
	console.log('start');
}

function dragEnd() {
	if(dog_fill) {
		this.className = 'dog_fill';
	}
	if(cat_fill) {
		this.className = 'cat_fill';
	}
	dog_fill = null;
	cat_fill = null;
	console.log('end');
}

function dragOver(e) {
	e.preventDefault();
	console.log('over');
}

function dragEnter(e) {
	e.preventDefault();
	console.log('enter');
}

function dragLeave(e) {
	e.preventDefault();
	//this.className = 'empty';
	console.log('leave');
}

function dragDrop(e) {
	e.preventDefault();
	//this.className = 'empty';
	if(dog_fill) {
		this.append(dog_fill);
	}
	if(cat_fill) {
		this.append(cat_fill);
	}
	console.log('drop');
}

//Data collection result
function dataColres() {
	console.log("Hello");
	let correct = 0;
	let wrong = 0;
	let dog_num = 0;
	let cat_num = 0;
	let total_num = 0;

	const dog_empties = document.querySelectorAll('.dog_empty');
	for(const dog_empty of dog_empties) {
		if(dog_empty.querySelector('div')) {
			if(dog_empty.querySelector('div').className == 'dog_fill') {
				correct += 1;
				dog_num += 1;
			}
			if(dog_empty.querySelector('div').className == 'cat_fill') {
				wrong += 1;
				dog_num += 1;
			}
		}
	}

	const cat_empties = document.querySelectorAll('.cat_empty');
	for(const cat_empty of cat_empties) {
		if(cat_empty.querySelector('div')) {
			if(cat_empty.querySelector('div').className == 'cat_fill') {
				correct += 1;
				cat_num += 1;
			}
			if(cat_empty.querySelector('div').className == 'dog_fill') {
				wrong += 1;
				cat_num += 1;
			}
		}
	}

	total_num = dog_num + cat_num;

	console.log(correct)
	console.log(wrong)
	console.log(dog_num)
	console.log(cat_num)
	console.log(total_num)

	let result1 = '';
	let result2 = '';

	if(total_num) {
		result1 = '你總共搜集了' + total_num.toString() + '張圖片。'
	} else {
		result1 = '你還沒蒐集圖片吧？';
	}

	if(wrong && total_num) {
		result2 = '但你是不是有的圖片分錯類別？';
	}

	document.getElementById('result1').innerHTML = result1;
	document.getElementById('result2').innerHTML = result2;

}