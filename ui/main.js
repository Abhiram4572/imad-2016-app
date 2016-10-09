console.log('Loaded!');

//change the text of main-text in div
var element = document.getElementById("main-text");

element.innerHTML = 'new data written';


//Move the image
var img = document.getElementById("madi");

img.onclick = function() {
    
    img.style.marginLeft ="100px";
    
};