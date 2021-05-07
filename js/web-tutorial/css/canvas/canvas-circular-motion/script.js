const canvas = document.querySelector('canvas');

canvas.width = innerWidth;
canvas.height = innerHeight;

const context = canvas.getContext('2d');

let mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
}

const colors = ['#7048e8', '#3b5bdb', '#74c0fc', '#a5d8ff'];

// Animate Canvas
function Particle(x, y, radius, color, radians, distanceFromCenter) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.radius = radius;
  this.radians = radians;
  this.velocity = 0.05;
  this.distanceFromCenter = distanceFromCenter;
  this.lastMouse = { x: x, y: y };

  this.draw = function ({ x, y }) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = this.radius;
    context.moveTo(x, y);
    context.lineTo(this.x, this.y);
    context.stroke();
    context.closePath();
  };

  this.update = function () {
    const lastPoint = {
      x: this.x,
      y: this.y,
    }

    // Drag Effect
    this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
    this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

    // Move points over time
    this.radians += this.velocity;
    this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;

    this.draw(lastPoint);
  };
}

const particleArray = [];

for (let i = 0; i < 50; i++) {
  const radius = (Math.random() * 3) + 2;
  const x = canvas.width / 2;
  const y = canvas.height / 2;
  const radians = Math.random() * Math.PI * 2;
  const color = randomColor(colors);
  const distanceFromCenter = randomIntFromRange(80, 150);

  particleArray.push(new Particle(x, y, radius, color, radians, distanceFromCenter));
}

function animate() {
  requestAnimationFrame(animate);
  // context.clearRect(0, 0, innerWidth, innerHeight);
  context.fillStyle = 'rgba(255, 255, 255, 0.05)';
  context.fillRect(0, 0, innerWidth, innerHeight);

  particleArray.forEach((particle) => particle.update(100));
}

addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
})

animate();
