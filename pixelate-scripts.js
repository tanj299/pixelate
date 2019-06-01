const table = document.getElementById("pixel-matrix");
let rows = 0; 
let columns = 1; 

function addRow () {
	// append row at end of table 
	let appendRow = table.insertRow(-1);

	for (let i = 0; i < columns; i++) {
		let newCell = appendRow.insertCell(i);
		newCell.style.backgroundColor = "white";
	}

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
	}

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


// Call addRow() with the table's ID

function dropdown() {
	document.getElementById("dropdownContent").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdownButton')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
