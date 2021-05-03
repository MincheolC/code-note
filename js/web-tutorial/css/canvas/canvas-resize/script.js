var canvas = document.querySelector('canvas');

// Resize Canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

// Rectangle
context.fillStyle = 'rgba(255, 0, 0, 0.5)';
context.fillRect(100, 100, 100, 100);
context.fillStyle = 'rgba(0, 0, 255, 0.5)';
context.fillRect(300, 300, 100, 100);

// Line
context.beginPath();
context.moveTo(50, 300);
context.lineTo(300, 100);
context.lineTo(400, 200);
context.strokeStyle = '#fa34a3';
context.stroke();

// Arc & Circle + Randomize
context.beginPath();
context.arc(300, 300, 30, 0, Math.PI * 2, false);
context.strokeStyle = 'blue';
context.stroke();

for (var i = 0; i < 500; i ++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  context.beginPath();
  context.arc(x, y, 5, 0, Math.PI * 2, false);
  context.strokeStyle = 'blue';
  context.stroke();
}