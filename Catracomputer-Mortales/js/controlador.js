var text;
var count;
var lines;
var PC = 0;
var acumulador = 0;

function modificarDiv(numero) {
    $('#lineas').html(' ');
    for (let i = 0; i < numero; i++) {
        $('#lineas').append(
            `<div> ${ i + 1 } </div>`
        );
    }
}

$("#instrucciones").keydown(
    function(e) {
        if (e.which == 8) {
            setTimeout(() => {
                this.text = $('#instrucciones').val();
                this.lines = this.text.split('\n');
                this.count = this.lines.length;
                modificarDiv(this.count);
            }, 10);
        } else {
            setTimeout(() => {
                this.text = $('#instrucciones').val();
                this.lines = this.text.split('\n');
                this.count = this.lines.length;
                modificarDiv(this.count);
            }, 10);
        }
    }
);

$("#btnPlay").click(function() {
    console.log('click en play');
    ejecutar($("#instrucciones").val());
});

$("#btnAtras").click(function() {
    console.log('click en atras');

});

$("#btnStop").click(function() {
    console.log('click en stop');

});

$("#btnSiguiente").click(function() {
    console.log('click en siguiente');

});

$("#btnPaso").click(function() {
    console.log('click en paso');

});

$(document).ready(function() {
    console.log('LISTOOOOO');
    $("#infoPC").html(PC);
    $("#infoAC").html(acumulador);
});

function ejecutar(texto) {
    var partes = texto.split("\n");
    var accion;
    var memoria;
    console.log(partes);
    while (PC != -1) {
        if (validar(partes[PC], PC)) {
            accion = partes[PC].substr(1, 2);
            memoria = partes[PC].substr(3, 4, 5);
            console.log(accion + " --> " + memoria);
            if (PC < (partes.length - 1)) {
                PC = PC + 1;
            } else {
                PC = -1;
            }
            $("#infoPC").html(PC);
        } else {
            PC = -1;
        }
    }
    PC = 0;
}

function validar(parte, numero) {
    var tamaño = parte.length;
    if (tamaño != 6) {
        alert('Error, instruccion incompleta: ' + (numero + 1));
        return false;
    }
    if (parte.substr(0, 1) != '+') {
        alert('Error, falta signo "+" en la instruccion número: ' + (numero + 1));
        return false;
    }
    for (var i = 1; i < tamaño; i++) {
        if (!(parte.charCodeAt(i) >= 48 && parte.charCodeAt(i) <= 57)) {
            alert('Error, se ingresó caracter inválido en la instrucción: ' + (numero + 1));
            return false;
        }
    }

    return true;
}