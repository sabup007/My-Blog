var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

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
	<!-- /js for sliding -->
	<!-- /js files -->
	

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