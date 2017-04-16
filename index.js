var express = require('express');
var app = express();
// import image from '/public/name of the image';

var ejs = require('ejs');
app.set('view engine', 'ejs');

var users = require('./data-folder/data.js');
var projects = require('./data-folder/projects.js');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render("./pages/index.ejs");
})

.get('/students', function(req, res){
  res.render("./pages/students.ejs", {students: users});
})

.get('/samploniens', function(req, res){
  res.render("./pages/samploniens.ejs", {samploniens: projects});
})

.get('/users/:id', function(req, res){
  res.render('./pages/users.ejs', {names: users[req.params.id]});
})

.get('/projects/:id', function(req, res){
  res.render("./pages/projects.ejs", {samplonien: projects[req.params.id]});
})
  .get('/*', function(req, res){
    res.status(404).render('./pages/error.ejs');
  })
app.listen(5000, function(req, res){
  console.log('the port is running in localhost 5000');
});
