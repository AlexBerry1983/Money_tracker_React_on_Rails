var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

// app.get('/transactions', function (req, res){
//   res.json()
// })

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
