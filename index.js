var express = require("express");
var pug = require('pug');
var path = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname+'/views');
app.use(express.static(path.join(__dirname+'/public')));

app.get('/', function(req, res){
  res.render('index', {
    "title":"[B]urgers"
  });
});

app.get('/directions', function(req, res){
  res.render('dir', {
    "title":"Directions"
  });
});

app.listen(3000);