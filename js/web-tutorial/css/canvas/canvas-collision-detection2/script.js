let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d', { alpha: false });

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

// const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
const colors = ['#4c6ef5', '#339af0', '#fab005', '#e64980'];

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5,
    }
    this.radius = radius;
    this.color = color;
    this.mass = 1;
    this.opacity = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();
  }

  update(particles) {
    this.draw();

    for (let i = 0; i < particles.length; i += 1) {
      if (this === particles[i]) continue;
      const diff = distance(this.x, this.y, particles[i].x, particles[i].y);
      if (diff < this.radius * 2) {
        resolveCollision(this, particles[i]);
      }
    }

    if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y- this.radius <= 0 || this.y + this.radius >= innerHeight) {
      this.velocity.y = -this.velocity.y;
    }

    // mouse collision detection
    if (distance(mouse.x, mouse.y, this.x, this.y) < 120 && this.opacity <= 0.2) {
      this.opacity += 0.02;
    } else if (this.opacity > 0) {
      this.opacity -= 0.02;
      this.opacity = Math.max(0, this.opacity);
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}

// Implementation
let particles;

function init() {
  particles = [];
  for (let i = 0; i < 120; i += 1) {
    const radius = 15;
    const color = randomColor(colors);
    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(radius, canvas.height - radius);

    if (i !== 0) {
      for (let j = 0; j < particles.length; j += 1) {
        if (distance(x, y, particles[j].x, particles[j].y) < radius * 2) {
          x = randomIntFromRange(radius, canvas.width - radius);
          y = randomIntFromRange(radius, canvas.height - radius);
          j = -1;
        }
      }
    }
    particles.push(new Particle(x, y, radius, color));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);

  particles.forEach((particle) => particle.update(particles));
}

init();
animate();
