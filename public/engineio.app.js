function $(id){ return document.getElementById(id); }

// socket
console.log('connect to server');
var socket = new eio.Socket('http://localhost:3001');
socket.on('open', function(){
  $('name').innerHTML = socket.transport.name;
  $('status').innerHTML = 'open';
  console.log('opened');
  socket.send('ping');
});
socket.on('close', function(){
  $('name').innerHTML = '';
  $('status').innerHTML = '(disconnected)'; 
  console.log('closed');
});
socket.on('message', function(d){
	console.log(d);
});
