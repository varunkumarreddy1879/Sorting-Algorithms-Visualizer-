/* Elements in the header of the page*/
/*In this js file Array generation is takencare*/
var array_size_element = document.getElementById("array_size"); /* (slider thing) array-size div tag*/
var no_of_ele_in_array = array_size_element.value; /*array-size div tag's value */
var speed_element = document.getElementById('speed_id'); /* 2nd Slider thing */
var generate_element = document.getElementById('generate');
var info_element = document.getElementById('info');


/*Elements in the body of the page*/
var array_value = [] /*height of the array is the value of the array*/
var width_of_array_div = [] /*width should be same for each array element */
var array_container_ele = document.getElementById("array_container");/*Main container*/


var algo_buttons = document.querySelectorAll('.algorithms button');
var sort_button = document.getElementById('sort');

array_size_element.addEventListener('input', update_array); /* If slider changes the no of elements in the array changes */
speed_element.addEventListener('input', speed_update); /*If slider changes the speed of Visualization changes this is done with the help of speed_update function*/
generate_element.addEventListener('click', generate_new_array); /*If Generate New Array Button is clicked this will take care*/




/*This function will take care of generating new array each time when pressed accordingly*/
function generate_new_array() {

	array_container_ele.innerHTML = "";
	array_value = [];
	for(let i=0; i < no_of_ele_in_array; ++i){
		array_value[i] = Math.floor(((Math.random() * 100) + 1) % array_container_ele.offsetHeight);
		width_of_array_div[i] = document.createElement('div');
		array_container_ele.appendChild(width_of_array_div[i]);
		width_of_array_div[i].style = " margin: 0% 0.1%; background: lightskyblue; width: " + (100/no_of_ele_in_array - (0.2)) +"%; height: " + array_value[i] + "%;";
	}
}

/*This function will take care of size of array by setting no_of_ele_in_array variable accordingly*/
function update_array(){
	no_of_ele_in_array = array_size_element.value;
	generate_new_array();
}


/*This function will take care of Visualization Speed by setting delay variable accordingly*/
function speed_update(){
	//console.log("speed_element.value = ", speed_element.value);
	let sp = speed_element.value; 
	if(sp == 1){
		delay = 500;
	}else if(sp == 2){
		delay = 200;
	}else if(sp == 3){
		delay = 100;
	}else if(sp == 4){
		delay = 10;
	}else if(sp == 5){
		delay = 1;
	}
	//console.log("delay = ", delay);
}

window.onload = update_array();


for(let i=0; i < algo_buttons.length; i++){
	algo_buttons[i].addEventListener('click', selected_algo);
	//console.log( "Algo of i= ", i ,algo_buttons[i]);
}

function selected_algo(){
	for(let i=0; i < algo_buttons.length; i++){
		algo_buttons[i].classList.remove('selected');
	}
	this.classList.add('selected');
	sort_button.disabled = false;
}

sort_button.addEventListener('click', Algo_Sort);

function Algo_Sort(){
	let ele = document.querySelector('.selected');

	switch(ele.id){
		case "Bubble_id" : Bubble_Sort();
						   break;
		case "Selection_id" : Selection_Sort();
						   break;
		case "Insertion_id" : Insertion_Sort();
						   break;
		case "Merge_id" : Merge_Sort();
						   break;
		case "Quick_id" : Quick_Sort();
						   break;
		case "Heap_id" : Heap_Sort();
						   break;
	}
}