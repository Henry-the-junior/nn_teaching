const graphs = document.querySelectorAll('.graph');
const empties = document.querySelectorAll('.empty');

for(const graph of graphs) {
	graph.addEventListener('dragstart', dragStart);
	graph.addEventListener('dragend', dragEnd);
}

for(const empty of empties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

let p_matrix = [[0.20, 0.70], [0.31, 0.65], [0.43, 0.47], [0.52, 0.49], [0.65, 0.21], [0.61, 0.47]];


//Drag Functions
function dragStart() {
	graph = this;
	this.className += ' hold';
	setTimeout(() => (this.className = 'invisible'), 0);
	console.log('start');
}

function dragEnd() {
	this.className = 'graph';
	graph = null;
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
	this.append(graph);
	console.log('drop');
}

//Input the graph
function inputGraph() {
	if(document.querySelector('.empty').firstElementChild) {
		var graph_id = document.querySelector('.empty').firstElementChild.id;
		if(graph_id == 'graph1') {
			document.querySelector('.dog_p_num').innerText = p_matrix[0][0];
			document.querySelector('.cat_p_num').innerText = p_matrix[0][1];
		}
		if(graph_id == 'graph2') {
			document.querySelector('.dog_p_num').innerText = p_matrix[1][0];
			document.querySelector('.cat_p_num').innerText = p_matrix[1][1];
		}
		if(graph_id == 'graph3') {
			document.querySelector('.dog_p_num').innerText = p_matrix[2][0];
			document.querySelector('.cat_p_num').innerText = p_matrix[2][1];
		}
		if(graph_id == 'graph4') {
			document.querySelector('.dog_p_num').innerText = p_matrix[3][0];
			document.querySelector('.cat_p_num').innerText = p_matrix[3][1];
		}
		if(graph_id == 'graph5') {
			document.querySelector('.dog_p_num').innerText = p_matrix[4][0];
			document.querySelector('.cat_p_num').innerText = p_matrix[4][1];
		}
		if(graph_id == 'graph6') {
			document.querySelector('.dog_p_num').innerText = p_matrix[5][0];
			document.querySelector('.cat_p_num').innerText = p_matrix[5][1];
		}
	} else {
			document.querySelector('.dog_p_num').innerText = 0;
			document.querySelector('.cat_p_num').innerText = 0;
		}
}