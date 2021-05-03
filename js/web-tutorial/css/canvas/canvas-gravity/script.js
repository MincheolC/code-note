var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d', { alpha: false });

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
let gravity = 1;
let friction = 0.99;

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

addEventListener('click', () => {
  init();
})

// Objects
class Ball {
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
    ctx.stroke();
    ctx.closePath();
  }

  update() {
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity;
    }

    if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx
    }

    this.x += this.dx
    this.y += this.dy
    this.draw()
  }
}

// Implementation
let balls;
function init() {
  balls = []
  for (let i = 0; i < 400; i++) {
    const radius = randomIntFromRange(10, 20);
    const x = randomIntFromRange(radius, canvas.width - radius);
    const y = randomIntFromRange(0, canvas.height - radius);
    const dx = randomIntFromRange(-2, 2)
    const dy = randomIntFromRange(-2, 2)
    const color = randomColor(colors);
    balls.push(new Ball(x, y, dx, dy, radius, color));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);

  balls.forEach(ball => {
    ball.update()
  })
}

init()
animate()