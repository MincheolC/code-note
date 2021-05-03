var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d', { alpha: false });

var maxRadius = 5;
var speedScale = 3;
var snowCount = 1500;
var centerX = Math.floor(innerWidth / 2);
var mouseX = centerX;

// Animate Canvas
var Snowflake = function () {
  this.x = 0;
  this.y = 0;
  this.dx = 0;
  this.dy = 0;
  this.color = 'white';
  this.radius = 0;

  this.reset();
}

Snowflake.prototype.reset = function () {

  this.x = Math.random() * innerWidth * 2;
  this.y = Math.random() * -innerHeight;
  this.dx = 0.5 - Math.random();
  this.dy = 1 + Math.random() * speedScale;
  this.radius = 1 + Math.random() * maxRadius;
};

var snowflakes = [];

function init() {
  for (var i = 0; i < snowCount; i++) {
    var snowflake = new Snowflake();
    snowflake.reset();
    snowflakes.push(snowflake);
  }
}

function animate() {
  context.clearRect(0, 0, innerWidth, innerHeight);

  snowflakes.forEach(snowflake => {
    var alpha = ((centerX - mouseX) / innerWidth) * 10;
    snowflake.x += snowflake.dx - alpha;
    snowflake.y += snowflake.dy;

    context.beginPath();
    context.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI*2, false);
    context.closePath();
    context.fillStyle = snowflake.color;
    context.fill();

    if (snowflake.y > innerHeight) {
      snowflake.reset();
    }
  });

  requestAnimationFrame(animate);
}

function onResize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

function onMousemove(event) {
  mouseX = event.x;
}

window.addEventListener('resize', onResize, false);
window.addEventListener('mousemove', onMousemove, false);

onResize();
init();
animate();