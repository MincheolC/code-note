var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d', { alpha: false });

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init();
})

// Objects
class Circle {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.draw()
  }
}

// Implementation
let circle1;
let circle2;
let color1;
let color2;
function init() {
  color1 = randomColor(colors);
  color2 = randomColor(colors);
  circle1 = new Circle(300, 300, 0, 0, 100, color1);
  circle2 = new Circle(100, 100, 0, 0, 30, color2);
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);

  circle1.update();
  circle2.x = mouse.x;
  circle2.y = mouse.y;
  circle2.update();

  if (distance(circle1.x, circle1.y, circle2.x, circle2.y) <= circle1.radius + circle2.radius) {
    circle1.color = color2;
  } else {
    circle1.color = color1;
  }
}

init()
animate()