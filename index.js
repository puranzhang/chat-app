var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var fs = require('fs');
//this string store timestamp and msg
var msgData = 'time, msg \n';
//specify output .csv file directory
var PATH = '../data.csv';

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('chat message', function(msg){
        //append timestamp and msg to string
        msgData += new Date() + ', ' + msg + '\n';

        //write output .csv file
      	fs.writeFile(PATH, msgData, function (err) {
            if (err) return console.log(err);
            //console.log('Done!');
        });

        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:' + '3000');
});
