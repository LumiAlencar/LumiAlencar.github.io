function get() {
    let x = document.getElementById("valor1").value;
    x = parseInt(x)
    let y = document.getElementById("valor2").value;
    y = parseInt(y)
    return {x, y};
}


function modoClaro() {
    document.getElementById("B").style.backgroundColor = "aliceblue";
    document.getElementById("B").style.color = "black";
}
function modoEscuro() {
    document.getElementById("B").style.backgroundColor = "black";
    document.getElementById("B").style.color = "aliceblue";
}

function dividir() {
    const {x, y} = get();
    resultado = parseFloat(x / y).toFixed(2)
    document.getElementById("resultado").innerHTML = resultado;
}

function subtrair() {
    const {x, y} = get();
    document.getElementById("resultado").innerHTML = x - y;
}

function multiplicar() {
    const {x, y} = get();
    document.getElementById("resultado").innerHTML = x * y;
}

function somar() {
    const {x, y} = get();
    document.getElementById("resultado").innerHTML = x + y;
}

var r = document.querySelector(':root');
var rs = getComputedStyle(r);
var b = document.querySelector('body');

function temaPadrao() {
    r.style.setProperty('--neon', '#00FF41');
    ctx.fillStyle = '#00FF41';
}

function temaAzul() {
    r.style.setProperty('--neon', '#3366ff');
    ctx.fillStyle = '#3366ff';
}

function temaRed() {
    r.style.setProperty('--neon', '#cc154e');
    ctx.fillStyle = '#cc154e';
}

function temaGold() {
    r.style.setProperty('--neon', '#e5b80b');
    ctx.fillStyle = '#e5b80b';
}

function temaSilver() {
    r.style.setProperty('--neon', '#bbc2cc');
    ctx.fillStyle = '#bbc2cc';
}

function temaRuby() {
    r.style.setProperty('--neon', '#9b111e');
    ctx.fillStyle = '#9b111e';
}

function temaSapph() {
    r.style.setProperty('--neon', '#0f52ba');
    ctx.fillStyle = '#0f52ba';
}

function temaEmer() {
    r.style.setProperty('--neon', '#50c878');
    ctx.fillStyle = '#50c878';
}

function temaDiam() {
    r.style.setProperty('--neon', '#b9f2ff');
    ctx.fillStyle = '#b9f2ff';
}
function temaPearl() {
    r.style.setProperty('--neon', '#eae0c8');
    ctx.fillStyle = '#eae0c8';
}
function temaPlat() {
    r.style.setProperty('--neon', '#9c8eb8');
    ctx.fillStyle = '#9c8eb8';
}

// Códigos Matrix

const canvas = document.getElementById('canv');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let cols = Math.floor(window.innerWidth / 20) + 1;
let ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function matrix () {
  const w = window.innerWidth;
  const h = window.innerHeight;
  
  if (canvas.width !== w) {
    canvas.width = w;
    cols = Math.floor(window.innerWidth / 20) + 1;
    ypos = Array(cols).fill(0);
  }
  if (canvas.height !== h) {
    canvas.height = h;
  }

  ctx.fillStyle =  '#0001'; //#0001
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = rs.getPropertyValue('--neon'); //00ff41
  ctx.font = '15pt monospace';

  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * (12447 - 12368) + 12368); //128
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);