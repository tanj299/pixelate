function addRow(tableID) {
    // Get a reference to the table
    let tableRef = document.getElementById(tableID);

    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);

    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(0);

    newCell.appendChild(newText);
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
