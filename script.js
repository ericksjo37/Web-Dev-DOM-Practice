
function buildTable() {
	var table = document.createElement("table");
	var headRow = document.createElement("tr");
	table.style.border = "thin solid black";
	table.style.borderCollapse = "collapse";
	
	for (var i = 0; i < 4; i++) {
		var headCell = document.createElement("th");
		headCell.style.border = "thin solid black";
		headCell.textContent = " Header " + [i + 1] + " ";
		headCell.style.textAlign = "center";
		headRow.appendChild(headCell);
	}
	table.appendChild(headRow);
	
	var tableDataRows = [];	//Making an array to hold the table rows
	
	for (var n = 0; n < 3; n++) {
		var tableRow = document.createElement("tr");
		var tableDataCells = [];	//Another array to hold individual cells in a row, to be held by the data rows array
		
		for (var i = 0; i < 4; i++) {
			var dataCell = document.createElement("td");
			dataCell.style.border = "thin solid black";
			dataCell.style.textAlign = "center";
			dataCell.textContent = [i+1] + ", " + [n + 1];
			tableRow.appendChild(dataCell);	
			tableDataCells.push(dataCell);		
		}	
		table.appendChild(tableRow);
		tableDataRows.push(tableDataCells);
	}
	document.body.appendChild(table);
	
	return tableDataRows;
	
}

function placeButton(buttonText, leftMargin) {
	var butt = document.createElement("button");
	butt.textContent = buttonText;
	butt.id = buttonText;
	butt.style.width = "50px";
	butt.style.marginLeft = leftMargin;
	document.body.appendChild(butt);
	
}

function setCurrentCell(tabl, row, col) {
	tabl[row - 1][col - 1].style.border = "thick solid black";
	currentRow = row;
	currentCol = col;
}

function resetOldCell(tabl, row, col) {
	tabl[row - 1][col - 1].style.border = "thin solid black";
}


function up() {
	if (checkMove(currentRow - 1, currentCol)) {
				resetOldCell(table, currentRow, currentCol);
				setCurrentCell(table, currentRow - 1, currentCol);
	}
}
function left() {
	if (checkMove(currentRow, currentCol - 1)) {
					resetOldCell(table, currentRow, currentCol);
					setCurrentCell(table, currentRow, currentCol - 1);
				}
}

function right() {
	if (checkMove(currentRow, currentCol + 1)) {
				resetOldCell(table, currentRow, currentCol);
				setCurrentCell(table, currentRow, currentCol + 1);
				}
}

function down() {
	if (checkMove(currentRow + 1, currentCol)) {
				resetOldCell(table, currentRow, currentCol);
				setCurrentCell(table, currentRow + 1, currentCol);
				}
}

function mark() {
	if (table[currentRow - 1][currentCol - 1].style.background == "yellow")
		table[currentRow - 1][currentCol - 1].style.background = "transparent";
	else
		table[currentRow - 1][currentCol - 1].style.background = "yellow";
}

function checkMove(curRow, curCol) {
	if (curRow > 3 || curCol > 4 || curRow < 1 || curCol < 1)
		return false;
	return true;
}

function homeworkTitle () {
	var headerNode = document.createElement("H1");
	var title = document.createTextNode("Dom and Events: Josh Erickson");
	headerNode.appendChild(title);
	document.body.appendChild(headerNode);
}

homeworkTitle();
var table = buildTable();
var currentRow = 1, currentCol = 1;
setCurrentCell(table, currentRow, currentCol);
document.body.appendChild(document.createElement('br'));

placeButton("Up", "108px");
document.body.appendChild(document.createElement('br'));

placeButton("Left", "83px");
placeButton("Right", "0px");
document.body.appendChild(document.createElement('br'));

placeButton("Down", "108px");
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('br'));

placeButton("Mark Cell", "108px");


document.getElementById("Up").addEventListener("click", up);
document.getElementById("Left").addEventListener("click", left);
document.getElementById("Right").addEventListener("click", right);
document.getElementById("Down").addEventListener("click", down);
document.getElementById("Mark Cell").addEventListener("click", mark);




