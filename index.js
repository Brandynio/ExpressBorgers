var express = require("express");
var pug = require('pug');
var path = require('path');
var config = require('./config.json');
//var jsonStuff = require('./importantFiles/menuItems.json');

var app = express();
app.use(express.static('images'));

app.set('view engine', 'pug');
app.set('views', __dirname+'/views');
app.use(express.static(path.join(__dirname+'/public')));

app.get('/', function(req, res){
  res.render('index', {
    "title":"[B]urgers",
    "config": config
  });
});

app.get('/directions', function(req, res){
  res.render('dir', {
    "title":"Directions",
    "config": config
  });
});

app.get('/menu', function(req, res){
  res.render('menu',{
    "title":"Menu",
    "config": config
  });
});

app.get('/burgers', function(req, res){
  res.render('index', {
    "title":"Welcome to the burgers page.",
    "config": config
  });
});

app.get('/sides', function(req, res){
  res.render('index', {
    "title":"Welcome to the sides page.",
    "config": config
  });
});

app.get('/desserts', function(req, res){
  res.render('index', {
    "title":"Welcome to the desserts page.",
    "config": config
  });
});

app.listen(3000);