console.log('Loaded!');

//change the text of main-text in div
var element = document.getElementById("main-text");

element.innerHTML = 'new data written';


//Move the image
var img = document.getElementById("madi");

var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 10 ;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    
    var interval = setInterval(moveRight , 100);
    
};