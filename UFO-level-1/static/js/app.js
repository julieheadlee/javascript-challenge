// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through the data to add to the table
tableData.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  })
});

// Select the button
var button = d3.select("#button");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(ufo => ufo.datetime === inputvalue);
  
    console.log(filteredData);
  
}


