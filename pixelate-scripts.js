const table = document.getElementById("pixel-matrix");
let rows = 0; 
let columns = 1; 
let currentColor = "white" ;
const colorSelect = document.getElementById("dropdownColors");

// change color in dropdown menu
// "change" is a JS event and fires when a new choice is made in a "select" element
colorSelect.addEventListener("change", () => {
	currentColor = colorSelect.options[colorSelect.selectedIndex].value; 
});

function addRow () {
	// append row at end of table 
	let appendRow = table.insertRow(-1);

	for (let i = 0; i < columns; i++) {
		let newCell = appendRow.insertCell(i);
		newCell.style.backgroundColor = "white";

		// changes color of cell 
		newCell.addEventListener("mousedown", function(event) {
			this.style.backgroundColor = currentColor; 
		});

		newCell.addEventListener("mouseover", function(event) {
			if(mousedown == true) {
				this.style.backgroundColor = currentColor; 
			}
		});
	}

	// @return: selectedIndex returns a dropdown menu's index option; starts at 0
	currentColor = colorSelect.options[colorSelect.selectedIndex].value; 

	// increment row count
	rows++;
}

function deleteRow() {
	// checks if row is less than 0 
	if(rows < 0) {
		rows = 0;
	}

	// delete row
	table.deleteRow(-1);

	// decrement rows
	rows--;
}


function addCol() {
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
			// assert: mousedown = false; otherwise, color changes on hover 
			// when column is added since it is the last event happening 
			if(mousedown = false) { 
				this.style.backgroundColor = currentColor; 
			}
		});
	}

	// @return: selectedIndex returns a dropdown menu's index option; starts at 0
	currentColor = colorSelect.options[colorSelect.selectedIndex].value;

	// increment column count 
	columns++;
}

function deleteCol() {
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




