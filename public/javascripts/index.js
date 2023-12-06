//alert("loaded");

var allData = null; // HACK

Handlebars.registerHelper('eq', function(arg1, arg2) {
    return arg1 == arg2;
  });
  
  document.addEventListener('DOMContentLoaded', (event) => {
  
fetch('/list', {method: 'POST'})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data); // Process our data here
    // Get the template from the <script> tag
    var source   = document.getElementById("template").innerHTML;
    //console.log("template is:", source);

    // Use Handlebars to compile the template
    var template = Handlebars.compile(source);

    // Generate the HTML and insert it into the DOM
    var html    = template({items:data});
    console.log( "result", html);
    document.getElementById('content').innerHTML = html;
    //alert("done");
    
  })
  .catch(error => {
    console.error('There has been a problem with the fetch operation:', error);
  });

});
