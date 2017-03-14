// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

/*
var coordNames = ['home', 'unlock', 'A1', 'A2', 'A3', 'B1', 'B2', 'B3',
'C1', 'C2', 'C3', 'D1', 'D2', 'D3'];

var coordinates = [
 "$H",
 "$X",
 "X-277 Y-278.6",
 "X-268 Y-278.6",
 "X-259 Y-278.6",
 "X-272.5 Y-270.5",
 "X-263.2 Y-270.5",
 "X-253.9 Y-270.5",
 "X-277 Y-262.4",
 "X-268.2 Y-262.8",
 "X-258.9 Y-262.8",
 "X-272.5 Y-254.3",
 "X-263.2 Y-254.3",
 "X-253.9 Y-254.3"
];
*/

var SerialPort = require('serialport');
var port = new SerialPort('/dev/cu.usbmodem1421',
{
  parser: SerialPort.parsers.readline('\n'),
  baudRate: 115200
});

port.on('open', function() {
  console.log('open');
});

// open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
})

port.on('data', function(data){
  console.log(data);
});

document.getElementById('home').addEventListener('click', function(){
  port.write("$H \n");
});

document.getElementById('unlock').addEventListener('click', function(){
  port.write("$X \n");
});

document.getElementById('A1').addEventListener('click', function(){
  port.write("X-277 Y-278.6 \n");
});

document.getElementById('A2').addEventListener('click', function(){
  port.write("X-268 Y-278.6 \n");
});

document.getElementById('A3').addEventListener('click', function(){
  port.write("X-259 Y-278.6 \n");
});

document.getElementById('B1').addEventListener('click', function(){
  port.write("X-272.5 Y-270.5 \n");
});

document.getElementById('B2').addEventListener('click', function(){
  port.write("X-263.2 Y-270.5 \n");
});

document.getElementById('B3').addEventListener('click', function(){
  port.write("X-253.9 Y-270.5 \n");
});

document.getElementById('C1').addEventListener('click', function(){
  port.write("X-277 Y-262.4 \n");
});

document.getElementById('C2').addEventListener('click', function(){
  port.write("X-268.2 Y-262.8 \n");
});

document.getElementById('C3').addEventListener('click', function(){
  port.write("X-258.9 Y-262.8 \n");
});

document.getElementById('D1').addEventListener('click', function(){
  port.write("X-272.5 Y-254.3 \n");
});

document.getElementById('D2').addEventListener('click', function(){
  port.write("X-263.2 Y-254.3 \n");
});

document.getElementById('D3').addEventListener('click', function(){
  port.write("X-253.9 Y-254.3 \n");
});


/*
for (var i = 0; i<14; i++){
  document.getElementById(coordNames[i]).addEventListener('click', function(){
    port.write(`${coordinates[i]} \n`);
    console.log(coordNames[i]);
  });
}
*/
