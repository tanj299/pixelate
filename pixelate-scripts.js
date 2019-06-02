// Jayson Tan | Raphael Vente 
// Course: JS Bootcamp
// Instructor(s): AJ Lapid / Justin Mintzer / Frank Rose 
// Assignment: Assignment 4
// References: Mozilla MDN ; Instructor's Notes 
// NtS: Note to Self - learning outcomes for myself; instructors please disregard 


/************************************** variables / mouse events **************************************/
const table = document.getElementById("pixel-matrix");
const colorSelect = document.getElementById("dropdownColors");
let rows = 0; 
let columns = 1; 
let currentColor = "white" ;
let ondrag = true;


// change color in dropdown menu
// "change" is a JS event and fires when a new choice is made in a "select" element
colorSelect.addEventListener("change", () => {
	currentColor = colorSelect.options[colorSelect.selectedIndex].value; 
});


// functions to check if mouse is being dragged 
// assert: checks for dragging for drawing in grid
document.body.onmousedown = function() {
	ondrag = true; 
}

document.body.onmouseup = function() {
	ondrag = false;
}

/**************************************  add/delete rows/columns functions **************************************/

const addRow = () => {
	currentColor = "white";

	// append row at end of table 
	let appendRow = table.insertRow(-1);

	for (let i = 0; i < columns; i++) {
		let newCell = appendRow.insertCell(i);
		newCell.style.backgroundColor = "white";

		// changes color of cell 
		// NtS: "mousedown" targets an element when a pointing device button is pressed 
		newCell.addEventListener("mousedown", function(event) {
			this.style.backgroundColor = currentColor; 
		});

		// NtS: mouse pointer comes over from an element 
		newCell.addEventListener("mouseover", function(event) {
			if(mousedown === true) {
				this.style.backgroundColor = currentColor; 
			}
		});
	}

	// @return: selectedIndex returns a dropdown menu's index option; starts at 0
	currentColor = colorSelect.options[colorSelect.selectedIndex].value; 

	// increment row count
	rows++;
}

const deleteRow = () => {
	// checks if row is less than 0 
	if(rows < 0) {
		rows = 0;
	}

	// delete row
	table.deleteRow(-1);

	// decrement rows
	rows--;
}


const addCol = () => {
	currentColor = "white";
	// append column at end of table 
	// assert: cells are added to each row 
	for(let i = 0; i < rows; i++) {
		let newCell = table.rows[i].insertCell(-1);
		newCell.style.backgroundColor = "white"; 

		// changes color of cell 
		newCell.addEventListener("mousedown", function(event) {
			this.style.backgroundColor = currentColor; 
		});

		newCell.addEventListener("mouseover", function(event) {
			// assert: ondrag = true; otherwise, color changes on hover 
			// when column is added since it is the last event happening 
			// also needed for dragging 
			if(ondrag === true) { 
				this.style.backgroundColor = currentColor; 
			}
		});
	}

	// @return: selectedIndex returns a dropdown menu's index option; starts at 0
	currentColor = colorSelect.options[colorSelect.selectedIndex].value;

	// increment column count 
	columns++;
}

const deleteCol = () => {
	// checks if column is less than 0 
	if(columns < 0) {
		columns = 0; 
	}

	// remove columns 
	for(let i = 0; i < rows; i++) {
		table.rows[i].deleteCell(-1);

	}

	// decrement columns
	columns--;
}

/************************************** fill/fillUncolored/clear functions  **************************************/

// fill all cells with current color
const fillCells = () => {
	for(let i = 0; i < rows; i++) {
		for(let j = 0; j < columns; j++) {
			let currentCell = table.rows[i].cells[j]; 
			let cellColor = currentCell.style.backgroundColor;
			currentCell.style.backgroundColor = currentColor;
		}
	}
}

// fill uncolored cells that is NOT default color with current color 
const fillUncoloredCells = () => {
	for(let i = 0; i < rows; i++) {
		for(let j = 0; j < columns; j++) {
			// assert: obtain current color of each cell 
			let currentCell = table.rows[i].cells[j]; 
			let cellColor = currentCell.style.backgroundColor; 

			// checks if the current cell color is the default color [white]
			// if it is, then it's the incorrect color; change to current color 
			if(cellColor === "white") {
				currentCell.style.backgroundColor = currentColor; 
			}
		}
	}
}

// clear all cells color to default color 
const clearAllCells = () => {
	for(let i = 0; i < rows; i++) {
		for(let j = 0; j < columns; j++) {
			let currentCell = table.rows[i].cells[j]; 
			currentCell.style.backgroundColor = "white";
		}
	}
}

