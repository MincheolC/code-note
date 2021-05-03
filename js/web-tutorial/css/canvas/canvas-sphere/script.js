let canvas;
let ctx;

window.requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

function drawPointWithGradient(ctx, x, y, size) {
  var reflection;

  reflection = size / 2;
  const offsetX = 0;
  const offsetY = 50;

  ctx.save();
  ctx.translate(x, y);

  var radgrad = ctx.createRadialGradient(-(reflection + offsetX), -(reflection + offsetY), reflection / 10, 0, 0, size);

  const n = 100;
  const r1 = 72;
  const g1 = 82;
  const b1 = 225;

  // const r2 = 6;
  // const g2 = 5;
  // const b2 = 13;

  const r2 = 18;
  const g2 = 14;
  const b2 = 36;
  for (let i = 0; i <= n; i++) {
    /* Linear
    const calcR = Math.round(r1 - ((r1 - r2) / n) * i);
    const calcG = Math.round(g1 - ((g1 - g2) / n) * i);
    const calcB = Math.round(b1 - ((b1 - b2) / n) * i);
    */

    /* Square Root
    const coefR = (r2 - r1) / Math.sqrt(n);
    const coefG = (g2 - g1) / Math.sqrt(n);
    const coefB = (b2 - b1) / Math.sqrt(n);

    const calcR = Math.round(coefR * Math.sqrt(i) + r1);
    const calcG = Math.round(coefG * Math.sqrt(i) + g1);
    const calcB = Math.round(coefB * Math.sqrt(i) + b1);
    */

    const coefR = (r2 - r1) / (n * n);
    const coefG = (g2 - g1) / (n * n);
    const coefB = (b2 - b1) / (n * n);

    const calcR = Math.round(coefR * i * i + r1);
    const calcG = Math.round(coefG * i * i + g1);
    const calcB = Math.round(coefB * i * i + b1);

    // console.log(coefR, coefG, coefB, calcR, calcG, calcB);
    let rgb = `rgb(${calcR}, ${calcG}, ${calcB})`;

    if (i === n) {
      // rgb = `rgb(${calcR}, ${calcG}, ${calcB}, 0)`;
      // radgrad.addColorStop(i / n, 'rgb(192, 245, 255, 0');
      // radgrad.addColorStop(0.99, 'rgb(192, 245, 255');
      // radgrad.addColorStop(0.995, 'rgb(251, 243, 221');
      // radgrad.addColorStop(0.995, 'rgb(253, 245, 233');
      radgrad.addColorStop(1, 'rgb(192, 245, 255, 0');
      // radgrad.addColorStop(1, 'rgb(251, 243, 221, 0');
    } else {
      radgrad.addColorStop(i / n, rgb);
    }
  }

  ctx.fillStyle = radgrad;
  ctx.fillRect(-size, -size, size * 2, size * 2);
  ctx.restore();
}

function update() {
  ctx.save();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPointWithGradient(ctx, 500, 500, 250);
  ctx.restore();
}

function start() {
  update();
}

window.onload = function () {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  start();
};
