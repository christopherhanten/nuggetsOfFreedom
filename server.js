//console.log('Hello World');


const express   = require('express');
const path      = require('path');
const mongoose  = require('mongoose');

//Connect Mongoose
mongoose.connect('mongodb://localhost/nuggetsoffreedom');
let db = mongoose.connection;

//Init App
const app     = express();

//Check connection
db.once('open', function(){
  console.log('Connected to MongoDb');
});

//check for db errors
db.on('error', function(err) {
  console.log(err);
});

//Bring in models
let Nugget    = require('./models/nugget');

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Home route
app.get('/', function(req, res) {
  // Nuggets.find({}, function(err, nugget){
  //   if(err){
  //     console.log(err);
  //   } else{

});
// });
//   // };
// });
// // });

//Add routes
//About
app.get('/about', function(req, res) {
  res.render('about')
});
//Sign In
app.get('/signIn', function(req, res) {
  res.render('SignIn')
});
//Sign Up
app.get('/signUp', function(req, res) {
  res.render('signUp')
});
//Sign Up Confirmation
app.get('/signUpConf', function(req, res) {
  res.render('signUpConf')
});
//Terms
app.get('/terms', function(req, res) {
  res.render('terms')
});
//User Nuggets
app.get('/userNuggets', function(req, res) {
  res.render('userNuggets')
});
//Add User Nugget Confirmation
app.get('/userNuggetConf', function(req, res) {
  res.render('userNuggetConf')
});

//Start Server
app.listen(3000, function() {
  console.log('Server started on port 3000...');
});
