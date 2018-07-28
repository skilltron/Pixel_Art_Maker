// checking event handler for submit button
$("#submit").on("click",function() {
	//prevents page refresh
	event.preventDefault();
	//clears old grid on submission
	$("#pixelCanvas").empty();
	//definitions for table height and width
	var gridHeight = ($("#inputHeight").val());
	var gridWidth = ($("#inputWidth").val());
	//build the grid
	makeGrid(gridHeight, gridWidth);
});


// when a table cell is clicked change it's background to selected color.
$("#pixelCanvas").on("click", "td", function(){
	$(this).css("background-color", $("#colorPicker").val());
});

$("#pixelCanvas").on("dblclick", "td", function(){
	$(this).css("background-color", "");
});

function makeGrid(gridHeight, gridWidth) {
	// adds a row
	for (i = 0; i < gridHeight; i++){
		$("#pixelCanvas").append($("<tr></tr>"));
		// adds columns to the row
		for(j = 0; j < gridWidth; j++){
			$("#pixelCanvas").children().last().append("<td></td>");
		}
	}

}