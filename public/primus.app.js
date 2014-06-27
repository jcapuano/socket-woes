function $(id){ return document.getElementById(id); }

// primus
console.log('connect to server');
var primus = Primus.connect('http://localhost:3001');
primus.on('open', function(){
  $('name').innerHTML = primus.transport.name;
  $('status').innerHTML = 'open';
  console.log('opened');
  primus.write('ping');
});
primus.on('close', function(){
  $('name').innerHTML = '';
  $('status').innerHTML = '(disconnected)'; 
  console.log('closed');
});
primus.on('data', function(data){
	console.log(data);
});
