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
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
inputField.on("change", runEnter);

// Complete the event handler function for the button and/or input field
function runEnter() {

    // Prevent the page from refreshing
    //d3.event.preventDefault();
      
    // Get the value property of the input element
    var inputValue = inputField.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    // Filter the data to only those equaling the input field value
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  
    console.log(filteredData);
    
    // Need to empty the table data before appending those meeting criteria
    tbody = d3.select("tbody")
    tbody.html("")

    filteredData.forEach((ufo) => {
      var row = tbody.append("tr");
      Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      })
    });
    
}


