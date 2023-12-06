//alert("loaded");

Handlebars.registerHelper('eq', function(arg1, arg2) {
    return arg1 == arg2;
});


Handlebars.registerHelper('idx1', function(arg1) {
    return arg1 +1;
});

function processEvent(event, payload) {
  var actions = {   'save':     { route:'save', method:'put' }, //TODO: add hidden status
                    'update':   { route:'update', method:'put'}, // TODO: description and status
                    'delete':   { route:'delete', method:'delete' }
};       
  var context = actions[event];
       fetch(context.route, {
        method: context.method,
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
          body: JSON.stringify(payload), // Stringify the payload to JSON
        })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); 
      })
      .then(data => {
        console.log("route response is: ", data);
        updateList();
      })
      .catch(error => {
        console.error('There has been a problem with the fetch operation:', error);
      });
} //processEvent()

function saveItem () {
    console.log("Saving new item");
    processEvent('save',{title:document.getElementById('title').value, status:'open' });
}

function updateItem (id, newState) {
    console.log("Updating item", id);
    // open, in progress, finished
    processEvent('update',{id:id, status:newState});
}

function deleteItem (id) {
    console.log("Deleting item", id);
    processEvent('delete',{id:id} );
}


function updateList() {
  fetch('/list', {method: 'GET'})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); 
  })
  .then(data => {
    //console.log(data); // Process our data here
    // Get the template from the <script> tag
    var source   = document.getElementById("template").innerHTML;
    //console.log("template is:", source);

    // Use Handlebars to compile the template
    var template = Handlebars.compile(source);

    // Generate the HTML and insert it into the DOM
    var html    = template({items:data});
    //console.log( "result", html);
    document.getElementById('content').innerHTML = html;
    //alert("done");
    
  })
  .catch(error => {
    console.error('There has been a problem with the fetch operation:', error);
  });
}

updateList(); // initial state
   
