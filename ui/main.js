
var button = document.getElementById("counter");
button.onclick = function() {
//Create request object
var request = new XMLHttpRequest();
request.open('GET', 'http://abhiram4572.imad.hasura-app.io/counter',true);
request.send(null);

//Catch the response and store it in a variable
request.onreadystatechange = function() {
    
        if(request.readystate === XMLHttpRequest.DONE){
            
            //Take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
                
            }
            
            
        }
 
    
    };
//Make a Request


};