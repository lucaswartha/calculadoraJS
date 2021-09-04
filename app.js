function insert(num) {
    var numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num;
}

function deleta() {
    document.getElementById('res').innerHTML = ""
}

function back() {
    var back = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = back.substring(0, back.length - 1)
}

const getRes = document.getElementById('res').innerHTML

function calcular(num) {
        var calcular = document.getElementById('res').innerHTML
    if(num % calcular) {
        return document.getElementById('res').innerHTML = eval(calcular).toFixed(0)
    } else if (calcular) {
        return document.getElementById('res').innerHTML = eval(calcular).toFixed(2)
    } else {
        document.getElementById('res').innerHTML = ""
    }
}