var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/Your', function(req, res){
  res.send('Mom!');
});

app.listen(4000, function(){
  console.log('app is listening on port 4000');
});
