// Function to add a new item to the table
function addItemToTable(title, description, status, creation) {
    // Get the table body
    const tableBody = document.getElementById('items').getElementsByTagName('tbody')[0];

    // Create a new row and cells
    const newRow = document.createElement('tr');
    const titleCell = document.createElement('td');
    const descriptionCell = document.createElement('td');
    const statusCell = document.createElement('td');
    const creationCell = document.createElement('td');

    // Set the text for each cell
    titleCell.textContent = title;
    descriptionCell.textContent = description;
    statusCell.textContent = status;
    creationCell.textContent = creation;

    // Append cells to the row
    newRow.appendChild(titleCell);
    newRow.appendChild(descriptionCell);
    newRow.appendChild(statusCell);
    newRow.appendChild(creationCell);

    // Append the row to the table body
    tableBody.appendChild(newRow);
}


// JavaScript to fetch data from an API endpoint
fetch('/list', {method: 'POST'})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data); // Process our data here
    // dynamically insert data into the DOM
    data.forEach(element => {
        addItemToTable(element.title, element.description, element.status, element.createdAt);    
    });
    
  })
  .catch(error => {
    console.error('There has been a problem with the fetch operation:', error);
  });
