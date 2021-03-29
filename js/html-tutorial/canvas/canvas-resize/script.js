var canvas = document.querySelector('canvas');

// Resize Canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

context.fillRect(100, 100, 100, 100);
context.fillRect(300, 300, 100, 100);