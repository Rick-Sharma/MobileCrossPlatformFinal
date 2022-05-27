var canvas = document.getElementById("plzwork");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var incrementor = 8;

var name = prompt("what is your name?");
var answer = "Hello " + name;

function Square() {
  ctx.fillStyle = "#57B99D";
  ctx.fillRect(x, y, 200, 200);

  ctx.fillStyle = "#DFF8EB";
  ctx.fillRect(1600, 1000, -x, -y);
}

function Animation() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(600, 300, x, 0, 2 * Math.PI);
  ctx.fillStyle = "#8AE1FC";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(-300, 700, x, 0, 2 * Math.PI);
  ctx.fillStyle = "#FF8552";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(1300, -400, x, 0, 2 * Math.PI);
  ctx.fillStyle = "#E6E6E6";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(100 + x, 800 - y);
  ctx.lineTo(200 + x, 400 - y);
  ctx.lineTo(400 + x, 700 - y);
  ctx.fillStyle = "#F5E5FC";
  ctx.fill();

  ctx.font = "50px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(answer, 500, y);

  Square();
  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;
}

setInterval(Animation, 10);
