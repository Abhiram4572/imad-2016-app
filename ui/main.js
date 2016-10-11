//Counter code
var button = document.getElementById('counter');
var span = document.getElementById('count');
button.onclick = function() {
//Make a request to counter endpoint 
var request = new XMLHttpRequest();

//Catch the response and store it in a variable
request.onreadystatechange = function(){
    
    if(request.readystate === XMLHttpRequest.DONE){
        
        if(request.status === 200){
            var counter = request.responseTest;
            span.innerHTML = counter.toString();
        }
    }
};
request.open('GET' , 'http://abhiram4572.imad.hasura-app.io/counter' , true);
request.send(null);
//Render it in the correct span 

};

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
//Make a request to server and send the name
//Capture a list of names and render it as  a list 
var names =['name1', 'name2','name3','name4'];
var list ='';
for(i=0;i<names.length;i++){
    list += '<li>' + names[i] + '</li>';
}
var ul = document.getElementById('nameslist');
ul.innerHTML = list;
};