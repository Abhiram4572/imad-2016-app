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


var submit = document.getElementById('submit_btn');
submit.onclick = function() {
//Make a request to server and send the name

//Make a request to counter endpoint 
var request = new XMLHttpRequest();

//Catch the response and store it in a variable
request.onreadystatechange = function(){
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    if(request.readystate === XMLHttpRequest.DONE){
        
        if(request.status === 200){
              var names = request.responseText;
              names = JSON.parse(names);
                var list ='';
                        for(var i=0;i< names.length;i++){
                        list += '<li>' + names[i] + '</li>';
                        }
                var ul = document.getElementById('nameslist');
                ul.innerHTML = list;  
        }
    }
};
request.open('GET' , 'http://abhiram4572.imad.hasura-app.io/submit-name?name=' + name , true);
request.send(null);
//Capture a list of names and render it as  a list 



$(function(){
	Profile.load();
});

Profile = {
	load:function(){
		this.links();
		this.social();
		this.accordion();
	},
	links:function(){
		$('a[href="#"]').click(function(e){
			e.preventDefault();
		});
	},
	social:function(){
		$('.accordion .about-me .photo .photo-overlay .plus').click(function(){
			$('.social-link').toggleClass('active');
			$('.about-me').toggleClass('blur');
		});
		$('.social-link').click(function(){
			$(this).toggleClass('active');
			$('.about-me').toggleClass('blur');
		});
	},
	accordion:function(){
		var subMenus = $('.accordion .sub-nav').hide();
		$('.accordion > a').each(function(){
			if($(this).hasClass('active')){
				$(this).next().slideDown(100);
			}
		});
		$('.accordion > a').click(function(){
			$this = $(this);
			$target =  $this.next();
			$this.siblings('a').removeAttr('class');
			$this.addClass('active');
			if(!$target.hasClass('active')){
				subMenus.removeClass('active').slideUp(100);
				$target.addClass('active').slideDown(100);
			}
			return false;
		});
	}
}