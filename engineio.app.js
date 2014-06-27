
/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , http = require('http')
  , eio = require('engine.io');  
  
var socket_port = process.env.SOCKET_PORT || 3001;
var server = http.createServer().listen(socket_port, function() {	
	console.log("Engine.IO started and listening on port " + socket_port);
});
var io = eio.attach(server);  
  
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res, next){
	console.log('rendering index');
  res.sendfile('views/engineio.view.html');
});

io.on('connection', function(socket){
	console.log('connection from ' + socket.id + (socket.upgraded ? ' (upgraded)' : ''));
  socket.on('message', function(v){
	console.log(v);
    socket.send('pong');
  });
  socket.on('close', function() {
	console.log('disconnection from ' + socket.id + (socket.upgraded ? ' (upgraded)' : ''));
  });  
  
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('\033[96mExpress listening on localhost:' + port + ' \033[39m');
});
