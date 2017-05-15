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

var autoCoordinates = [
  "Z-50 \n", //0
  "X-277.7 Y-278.4 \n",  //1
  "X-268.4 Y-278.3 \n",  //2
  "X-259.2 Y-278.5 \n",  //3
  "X-273.1 Y-270.3 \n",  //4
  "X-263.9 Y-270.3 \n",  //5
  "X-254.6 Y-270.3 \n",  //6
  "X-277.8 Y-262.3 \n",  //7
  "X-268.5 Y-262.2 \n",  //8
  "X-259.3 Y-262.2 \n",  //9
  "X-273.1 Y-254.1 \n",  //10
  "X-264 Y-254.2 \n",  //11
  "X-254.5 Y-254.2 \n",  //12
  "Z-65 \n"  //13
];

var state = "false";

var runnerFunction;

var SerialPort = require('serialport');
var port = new SerialPort('/dev/cu.usbmodem1411',
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
  clearInterval(runnerFunction);
  port.write("$H \n");
});

document.getElementById('unlock').addEventListener('click', function(){
  port.write("$X \n");
});

document.getElementById('A1').addEventListener('click', function(){
  port.write("Z-50 \n");
  port.write("X-277.7 Y-278.4 \n");
  port.write("Z-65 \n");
  //port.write("X-277 Y-278.6 \n");
});

document.getElementById('A2').addEventListener('click', function(){
  port.write("Z-50 \n");
  port.write("X-268.4 Y-278.3 \n");
  port.write("Z-65 \n");
  //port.write("X-268 Y-278.6 \n");
});

document.getElementById('A3').addEventListener('click', function(){
  port.write("Z-50 \n");
  port.write("X-259.2 Y-278.5 \n");
  port.write("Z-65 \n");
  //port.write("X-259 Y-278.6 \n");
});

document.getElementById('B1').addEventListener('click', function(){
   port.write("Z-50 \n");
   port.write("X-273.1 Y-270.3 \n");
   port.write("Z-65 \n");
   // ADD 0.1 TO X
  //port.write("X-272.5 Y-270.5 \n");
});

document.getElementById('B2').addEventListener('click', function(){
    port.write("Z-50 \n");
    port.write("X-263.9 Y-270.3 \n");
    port.write("Z-65 \n");
  //port.write("X-263.2 Y-270.5 \n");
});

document.getElementById('B3').addEventListener('click', function(){
   port.write("Z-50 \n");
   port.write("X-254.6 Y-270.3 \n");
   port.write("Z-65 \n");
  //port.write("X-253.9 Y-270.5 \n");
});

document.getElementById('C1').addEventListener('click', function(){
  port.write("Z-50 \n");
  port.write("X-277.8 Y-262.3 \n");
  port.write("Z-65 \n");
  //port.write("X-277 Y-262.4 \n");
});

document.getElementById('C2').addEventListener('click', function(){
    port.write("Z-50 \n");
    port.write("X-268.5 Y-262.2 \n");
    port.write("Z-65 \n");
    //ADD 0.2 TO Y
  //port.write("X-268.2 Y-262.8 \n");
});

document.getElementById('C3').addEventListener('click', function(){
    port.write("Z-50 \n");
    port.write("X-259.3 Y-262.2 \n");
    port.write("Z-65 \n");
    //ADD 0.2 TO Y
  //port.write("X-258.9 Y-262.8 \n");
});

document.getElementById('D1').addEventListener('click', function(){
  //port.write("Z-1 \n");
  port.write("Z-50 \n");
  port.write("X-273.1 Y-254.1 \n");
  port.write("Z-65 \n");
  //port.write("Z-30 \n");
  //ADD 0.2 TO Y
  //port.write("X-272.5 Y-254.3 \n");
});

document.getElementById('D2').addEventListener('click', function(){
  //port.write("Z-1 \n");
  port.write("Z-50 \n");
  port.write("X-264 Y-254.2 \n");
  port.write("Z-65 \n");
  //port.write("Z-30 \n");
  //ADD 0.2 TO Y
  //port.write("X-263.2 Y-254.3 \n");
});

document.getElementById('D3').addEventListener('click', function(){
  //port.write("Z-1 \n");
  port.write("Z-50 \n");
  port.write("X-254.5 Y-254.2 \n");
  port.write("Z-65 \n");
  //port.write("Z-30 \n");
  //ADD 0.2 TO Y
  //port.write("X-253.9 Y-254.3 \n");
});

document.getElementById('auto').addEventListener('click', function(){
  runnerFunction = setInterval(function(){
        console.log(autoCoordinates[0]);
        console.log(autoCoordinates[Math.floor((Math.random() * 12) + 1)]);
        console.log(autoCoordinates[13]);
      }, 5000);
  // port.write(autoCoordinates[0]);
  // port.write(autoCoordinates[Math.floor((Math.random() * 12) + 1)]);
  // port.write(autoCoordinates[13]);
});

/*
document.getElementById('lower').addEventListener('click', function(){
  port.write(document.getElementById('zValue').value + "\n");
  //console.log(document.getElementById('zValue').value);
});
*/

/*
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return;
  }

  switch (event.key) {
    case "1":
        port.write("Z-1 \n");
        port.write("X-277.7 Y-278.5 \n");
        port.write("Z-10 \n");
      break;
    case "2":
        port.write("Z-1 \n");
        port.write("X-268.4 Y-278.2 \n");
        port.write("Z-10 \n");
      break;
    case "3":
        port.write("Z-1 \n");
        port.write("X-259.2 Y-278.6 \n");
        port.write("Z-10 \n");
      break;
    case "q":
        port.write("Z-1 \n");
        port.write("X-273 Y-270.3 \n");
        port.write("Z-10 \n");
      break;
    case "w":
        port.write("Z-1 \n");
        port.write("X-263.9 Y-270.3 \n");
        port.write("Z-10 \n");
      break;
    case "e":
        port.write("Z-1 \n");
        port.write("X-254.6 Y-270.3 \n");
        port.write("Z-10 \n");
      break;
    case "a":
        port.write("Z-1 \n");
        port.write("X-277.8 Y-262.2 \n");
        port.write("Z-10 \n");
      break;
    case "s":
        port.write("Z-1 \n");
        port.write("X-268.5 Y-262 \n");
        port.write("Z-10 \n");
      break;
    case "d":
        port.write("Z-1 \n");
        port.write("X-259.3 Y-262 \n");
        port.write("Z-10 \n");
      break;
    case "z":
        port.write("Z-1 \n");
        port.write("X-273.1 Y-253.9 \n");
        port.write("Z-10 \n");
      break;
    case "x":
        port.write("Z-1 \n");
        port.write("X-263.9 Y-253.9 \n");
        port.write("Z-10 \n");
      break;
    case "c":
        port.write("Z-1 \n");
        port.write("X-254.5 Y-254 \n");
        port.write("Z-10 \n");
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);

/*
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "ArrowDown":
      // Do something for "down arrow" key press.
      break;
    case "ArrowUp":
      // Do something for "up arrow" key press.
      break;
    case "ArrowLeft":
      // Do something for "left arrow" key press.
      break;
    case "ArrowRight":
      // Do something for "right arrow" key press.
      break;
    case "Enter":
      // Do something for "enter" or "return" key press.
      break;
    case "Escape":
      // Do something for "esc" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
*/


/*
for (var i = 0; i<14; i++){
  document.getElementById(coordNames[i]).addEventListener('click', function(){
    port.write(`${coordinates[i]} \n`);
    console.log(coordNames[i]);
  });
}
*/
