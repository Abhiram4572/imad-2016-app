
//Counter code
var counter = 0;
var button = document.getElementById("counter");
button.onclick = function() {
//Make a request to counter endpoint 

//Catch the response and store it in a variable


//Render it in the correct span 
counter = counter + 1;
var span = document.getElementById("count");
span.innerHTML = counter.toString();
};