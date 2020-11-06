function drawRect() {
  const canvas = document.getElementById('rect');
  const ctx = canvas.getContext('2d');

  ctx.fillRect(25, 25, 100, 100);  // fillRect(x, y, width, height)
  ctx.clearRect(45, 45, 60, 60);   // strokeRect(x, y, width, height)
  ctx.strokeRect(50, 50, 50, 50);  // clearRect(x, y, width, height)
}

function drawTri() {
  const canvas = document.getElementById('tri');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 25);
  ctx.lineTo(100, 75);
  ctx.fill();
}

function drawSmile() {
  const canvas = document.getElementById('smile');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
  ctx.moveTo(110, 75)
  ctx.arc(75, 75, 35, 0, Math.PI, false);
  ctx.moveTo(65, 65)
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
  ctx.moveTo(95, 65)
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
  ctx.stroke();
}

function drawTri2() {
  const canvas = document.getElementById('tri2');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(125, 125);
  ctx.lineTo(125, 45);
  ctx.lineTo(45, 125);
  ctx.closePath();
  ctx.stroke();
}

drawRect();
drawTri();
drawSmile();
drawTri2();