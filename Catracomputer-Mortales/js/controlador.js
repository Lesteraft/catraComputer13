var memoria = [];
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
    do {
        if (validar(partes[PC], PC)) {
            accion = partes[PC].substr(1, 2);
            memoria = partes[PC].substr(3, 4, 5);
            accionEval(accion, memoria);
            console.log(accion + " --> " + memoria);
            if (PC < (partes.length - 1)) {
                PC = PC + 1;
            } else {
                PC = -1;
                break;
            }
            $("#infoPC").html(PC);
        } else {
            PC = -1;
            break;
        }
    } while (PC != 0 || PC != -1)
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

function accionEval(accion, memoria) {
    switch (accion) {
        case '10':
            {
                console.log("Lee");
                break;
            }
        case '11':
            {
                console.log('Escribe');
                break;
            }
        case '20':
            {
                console.log('Carga');
                break;
            }
        case '21':
            {
                console.log('Almacena');
                break;
            }
        case '30':
            {
                console.log('Suma');
                break;
            }
        case '31':
            {
                console.log('Resta');
                break;
            }
        case '32':
            {
                console.log('Divide');
                break;
            }
        case '33':
            {
                console.log('Multiplica');
                break;
            }
        case '40':
            {
                console.log('Bifurca');
                break;
            }
        case '41':
            {
                console.log('Bifurca si Negativo');
                break;
            }
        case '42':
            {
                console.log('Bifurca si Cero');
                break;
            }
        case '43':
            {
                console.log('Fin Programa');
                break;
            }
        default:
            {
                console.log('error');
                break;
            }
    }
}