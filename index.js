var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//require fast-csv to write msg file
var csv = require("fast-csv");
//this array store arrayS of timestamp and msg
var msgData = [];
//specify output .csv file directory
var PATH = 'data.csv';

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	//append timestamp and msg to array
  	msgData.push([new Date()]);
  	msgData.push([msg]);

  	//write out msg logs
  	csv.writeToPath(PATH, msgData, {headers : false});

    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:' + '3000');
});
