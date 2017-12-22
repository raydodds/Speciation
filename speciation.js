
let mutationRate = 10000 // One over this number
let running;
let generations = 100;

class Cell {
	constructor(){
		this.r = 128;
		this.g = 128;
		this.b = 128;
	}

	


	// Sub self for null values

	// new value is average of values around it + random number (-1 to 1)

	// variable% of mutation chance


}


function start() {
	// start updating...
	running = window.setInterval(update, 100);
}

function stop(){
	//	stop updating...
	clearInterval(running);
}

function reset(){
	//	reset state...
	console.log("Resetting everything to default.");
}

function update(){
	//	update state...
}

