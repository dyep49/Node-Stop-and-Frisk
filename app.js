var mongodb = require('mongodb');

var express = require('express');
var app = express();

var nodemon = require('nodemon');

// var url = "mongodb://localhost:27017/test"
// mongodb.MongoClient.connect(url, function(err, db) {
//   if (err) {
//     throw err;
//   }
//   console.log("connected to the database");
// });




app.use(express.static(__dirname + '/public'));

nodemon({
  script: 'app.js',
  ext: 'js json'
});

nodemon.on('start', function () {
  console.log('App has started');
}).on('quit', function () {
  console.log('App has quit');
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});
 
app.listen(3000);

app.get('/', function(req, res) {

});
