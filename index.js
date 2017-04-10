var express = require('express');
var app = express();

var ejs = require('ejs');
app.set('view engine', 'ejs');

var users = require('./data-folder/data.js');
var projects = require('./data-folder/projects.js');

app.get('/', function(req, res){
  res.render("./pages/index.ejs", {students: users, samploniens: projects});
})

.get('/users/:id', function(req, res){
  res.render('./pages/users.ejs', {names: users[req.params.id]});
})

app.get('/projects/:id', function(req, res){
  res.render("./pages/projects.ejs", {samplonien: projects[req.params.id]});
})
  
app.listen(5000, function(req, res){
  console.log('the port is running in localhost 5000');
});
