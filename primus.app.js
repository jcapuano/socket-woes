
/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , http = require('http')
  , Primus = require('primus')
  
var socket_port = process.env.SOCKET_PORT || 3001;
var server = http.createServer().listen(socket_port, function() {
	console.log("Primus started and listening on port " + socket_port);
});
var primus = new Primus(server, { transformer: 
	'engine.io' 
	//'sockjs' 
});  
primus.save(__dirname +'/public/primus.js');

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res, next){
	console.log('rendering index');
  res.sendfile('views/primus.view.html');
});

primus.on('connection', function(socket){
	console.log('connection from ' + socket.id + (socket.upgraded ? ' (upgraded)' : ''));
  socket.on('data', function(v){
	console.log(v);
    socket.write('pong');
  });
  
  socket.on('end', function() {
	console.log('disconnection from ' + socket.id + (socket.upgraded ? ' (upgraded)' : ''));
  });  
});

primus.authorize(function(req, done) {
	console.log('authorize request for ' + (req.uri.query.sid || req.url));
	//console.dir(req);
	done();
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('\033[96mExpress listening on localhost:' + port + ' \033[39m');
});
