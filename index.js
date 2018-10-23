var express = require('express');
var app = express();

// this makes public folder default source
app.use(express.static('public'));

// these are the routes for request and response from server
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/Your', function(req, res){
  res.send('Mom!');
});

// This creates our express server and assigns a port to listen on
app.listen(process.env.PORT || 4000, function(){
  console.log('app is listening on port 4000');
});
