
//Move the image
var img = document.getElementById("madi");

var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 1 ;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    
    var interval = setInterval(moveRight , 50);
    
};


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