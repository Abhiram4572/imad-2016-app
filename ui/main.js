


//Counter code
var counter = 0;
var button = document.getElementById("counter");
button.onclick = function() {
//Make a request to counter endpoint 
var request = new XMLHttpRequest();
//Catch the response and store it in a variable
request.onreadystatechange = function(){
    
    if(request.readystate == XMLHttpRequest.DONE){
        
        if(request.status == 200){
            var counter = request.responseTest;
            var span = document.getElementById("count");
            span.innerHTML = counter.toString();
        }
        
    }
    
    
    
};

//Render it in the correct span 

};