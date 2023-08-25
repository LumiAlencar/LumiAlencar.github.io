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
