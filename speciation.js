
let mutationRate = 10000; // One over this number
let running;
let generations = 100;
let height = 10;
let width = 20;
let updateDone = true;
let stateArray = [];

class Cell {
	constructor(){
		this.r = 128;
		this.g = 128;
		this.b = 128;
		this.enabled = true;
	}

	getNextGen() {
		let newRed = this.r;
		let newGreen = this.g;
		let newBlue = this.b;
		

		

		return [newRed, newGreen, newBlue];
	}

	setNextGen(colorArray){
		this.r = colorArray[0];
		this.g = colorArray[1];
		this.b = colorArray[2];
	}




	// Sub self for null values

	// new value is average of values around it + random number (-1 to 1)

	// variable% of mutation chance

	// Get Border color (perhaps darken by 10%)
	getBorder(){
		return 
	}

}


function start() {
	// start updating...
	console.log("Starting.");
	running = window.setInterval(update, 100);
}

function stop(){
	//	stop updating...
	console.log("Stopping.")
	clearInterval(running);
}

function reset(){
	//	reset state...
	console.log("Resetting everything to default.");
}

function update(){
	console.log(updateDone)
	if(updateDone){
		updateDone = false;
		//	update state...
		console.log("Updating.")

		setTimeout(() => { updateDone = true }, 1000);
	}
}

function set(){
	//	set values from control box
	console.log("Setting variables.")
	nHeight = document.getElementById("height");
	nWidth = document.getElementById("width");
	nNumGenerations = document.getElementById("numGenerations");
}

/**
 * creates a two dimensional n by m array filled with a starting value
 * @param  {int} rows    the value n
 * @param  {int} columns the value m
 * @param  {object} initVal What the new array should be filled with
 * @return {array of arrays of objects}	The newly created array
 */
function createArray(rows, columns, initVal){
	let newArray = [];
	for( let i = 0; i < rows; i++ ){
		let newCol = [];
		for( let j = 0; j < columns; j++){
			newCol.push(initVal);
		}
		newArray.push(newCol);
	}
	return newArray;
}
