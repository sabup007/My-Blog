var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <!doctype html>
<html>
<head>     
<title>Personal Blog</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="/ui/style.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
        <div class="main">
		    <div class="header">
		    <div class="header_resize">
      <div class="logo">
        <h1><a href="/" id="logo">Personal Blog <small>It's All I am.</small></a></h1>
      </div>
      <div class="menu_nav">
        <ul>
          <li ><a href="/"><span>Home Page</span></a></li>
          <li class="active"><a href="/article"><span>My Articles</span></a></li>
          <li><a href="/photos"><span>My Photos</span></a></li>
          <li><a href="/contact"><span>Contact Me</span></a></li>
		  <li> </li>
		  <li id="login_area" style="padding-left:50px; "> <a href="/login" style="font-size:18px;">Login</a> </li>
		</ul>
		  
        
      </div>
	  <div class="clr"></div>
      <div class="clr"></div>
    </div>
  </div>
    <div class="content">
    <div class="content_resize">
      <div class="mainbar">
        <div class="article">
            <h2>${heading}</h2>
			<hr/>
          <p class="infopost"> Date of posted: ${date.toDateString()}</p>
          <div class="clr"></div>
          <div class="post_content">
            <div id="articles">
              <div>
                <p style="font-size:18px;text-align:justify; text-indent: 50px; line-height: 1.8;"> ${content} </p>
              </div>
              <hr/>
              <h2>Comments</h2>
              <div id="comment_form">
              </div>
              <div id="comments">
                <center>Loading comments...</center>
              </div>
            </div>
			
          </div>
          <div class="clr"></div>
        </div>
      </div>
      
      <div class="clr"></div>
    </div>
  </div>
    	   
    <div class="footer">
     <div class="footer_resize">
	   <p id="rl"> If you are a new user then  <a href="/reg">register now</a>.&nbsp Or &nbsp please  <a href="/login">login</a> to comment my articles.</p>
       <p class="lf">&copy; Copyright Vishnu.</p>
       <p class="rf">Design by Vishnu</p>
       <div style="clear:both;"></div> 
     </div>
   </div>
</div>
        <script type="text/javascript" src="/ui/article.js">
        </script>
<link href="/ui/bootstrap.min.css" rel="stylesheet" type="text/css" media="all">
<link href="/ui/cobox.css" rel="stylesheet" type="text/css">
<link href="/ui/portfolio.css" rel="stylesheet" type="text/css" media="all">
<link href="/ui/style.css" rel="stylesheet" type="text/css" media="all">

<link href='//fonts.googleapis.com/css?family=Quicksand:400,700,300' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Cinzel:400,700,900' rel='stylesheet' type='text/css'>
	
<script src="/ui/modernizr.custom.js"></script>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="/ui/bootstrap.min.js"></script>
	<!-- js files for banner slider -->
	<script src="/ui/responsiveslides.min.js"></script>
	  <script>
    $(window).load(function() {
     // Slideshow for banner
      $("#slider").responsiveSlides({
        maxwidth: 1920,
        speed: 1000
      });
    });
  </script>
	<!-- /js files for banner slider -->
	<!-- js files for portfolio -->
		<script src="/ui/classie.js"></script>
		<script src="/ui/helper.js"></script>
		<script src="/ui/grid3d.js"></script>
		<script>
			new grid3D( document.getElementById( 'grid3d' ) );
		</script>
	<!-- /js files for portfolio -->
	<!-- js files for gallery -->
<script type="text/javascript" src="/ui/cobox.js"></script>
	<!-- /js files for gallery -->	
	<!-- js for smooth scrolling -->
	
		<script>
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  // Store hash
  var hash = this.hash;
  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 900, function(){
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
  });
})
</script>
	<!-- /js for smooth scrolling -->
	<!-- js for sliding -->
	
	<script>
	$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});
</script>

    </body>
</html>
 `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/bootstrap.min', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.css'));
});	
	
app.get('/ui/portfolio', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'portfolio.css'));
});	
	
app.get('/ui/cobox', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cobox.css'));
});	
	
function hash (input, salt) {
    // How do we create a hash?
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ["pbkdf2", "10000", salt, hashed.toString('hex')].join('$');
}

app.get('/ui/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', req.params.fileName));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});