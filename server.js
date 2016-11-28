var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require('express-session');


<html lang="en">
<head>
<title>My Profile</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="keywords" content="My Profile Sabin Payyappat" />

<link href="/ui/bootstrap.min.css" rel="stylesheet" type="text/css" media="all">
<link href="/ui/cobox.css" rel="stylesheet" type="text/css">
<link href="/ui/portfolio.css" rel="stylesheet" type="text/css" media="all">
<link href="/ui/style.css" rel="stylesheet" type="text/css" media="all">

<link href='//fonts.googleapis.com/css?family=Quicksand:400,700,300' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Cinzel:400,700,900' rel='stylesheet' type='text/css'>
	
<script src="/ui/modernizr.custom.js"></script>

</head>

</html>

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
