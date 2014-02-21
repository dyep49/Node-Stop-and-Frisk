var express = require('express');
var app = express();

var nodemon = require('nodemon');


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
