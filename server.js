var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
 'article-one' : {
    title:'Article One | Abhiram',
    heading: 'Article One',
    date: 'Sept 5 2016',
    content: `             
                <p>
                    This is a content for my first article page. This is a content for my first article page. This is a content for my first article page. This is a content for my first article page. This is a content for my first article page. This is a content for my first article page.
                </p>
                <p>
                    This is a content for my first article page. This is a content for my first article page. This is a content for my first article page. This is a content for my first article page. This is a content for my first article page. This is a content for my first article page.
                </p>
                <p>
                    This is a content for my first article page. This is a content for my first article page. This is a content for my first article page. This is a content for my first article page. This is a content for my first article page. This is a content for my first article page.
                </p>`
    
    
},
 'article-two' : {
    title:'Article Two | Abhiram',
    heading: 'Article Two',
    date: 'Sept 20 2016',
    content: `             
                <p>
                    This is a content for my second article page.
                </p>  `  
    
    
},
 'article-three' : {
    title:'Article Three | Abhiram',
    heading: 'Article Three',
    date: 'Oct 9 2016',
    content: `             
                <p>
                    This is a content for my third article page.
                </p>  `  
    
    
}
};

function createTemplate(data)
{
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

var counter = 0; 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/new', function (req, res) {
  res.sendFile(path.join(__dirname, 'new', 'index.html'));
});


app.get('/counter' , function(req,res) {
    counter = counter +1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function(req,res){// /submit-name?name=xxxx
    var name = req.query.name;
    //JSON : Javascript Object Notation
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function(req,res){
    
     var articleName = req.params.articleName; 
     res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/pic.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pic.jpg'));
});
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


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
