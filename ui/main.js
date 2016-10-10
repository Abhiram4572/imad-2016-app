


//Counter code
var button = document.getElementById('counter');
var span1 = document.getElementById('count');
button.onclick = function() {
//Make a request to counter endpoint 
var request = new XMLHttpRequest();

//Catch the response and store it in a variable
request.onreadystatechange = function(){
    
    if(request.readystate === XMLHttpRequest.DONE){
        
        if(request.status === 200){
            var counter = request.responseTest;
            span1.innerHTML = counter.toString();
        }
        
    }
    
    
    
};


request.open('GET' , 'http://abhiram4572.imad.hasura-app.io/counter' , true);
request.send(null);
//Render it in the correct span 

};