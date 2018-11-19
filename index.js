var express = require("express");
var pug = require('pug');
var path = require('path');
//var jsonStuff = require('./importantFiles/menuItems.json');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname+'/views');
app.use(express.static(path.join(__dirname+'/public')));

app.get('/', function(req, res){
  res.render('index', {
    "title":"Cameron's p cute"
  });
});

app.get('/burgers', function(req, res){
  res.render('index', {
    "title":"Welcome to the burgers page."
  });
});

app.get('/sides', function(req, res){
  res.render('index', {
    "title":"Welcome to the sides page."
  });
});

app.get('/desserts', function(req, res){
  res.render('index', {
    "title":"Welcome to the desserts page."
  });
});

app.listen(3000);