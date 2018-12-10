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
    memoria['009'] = 84;
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

function accionEval(accion, numero) {
    switch (accion) {
        case '10':
            {
                console.log("Lee");
                //Ojo, Alison, aquí debe ir relacionado con "consola" para que desde la consola el ususario ingrese lo que quiera
                break;
            }
        case '11':
            {
                console.log('Escribe');
                //aquí tambien a consola ahí se debe imprimir los resultados por ejempli
                $("#consolaEntrada").css('display', 'none');
                $("#consolaSalida").css('display', 'block');
                $("#consolaSalida").html('A MOSTRAR: ' + memoria[numero]);
                break;
            }
        case '20':
            {
                console.log('Carga');
                //se pedirá mediante "memoria" al arreglo de objetos para mandarlo al ACUMULADOR
                break;
            }
        case '21':
            {
                console.log('Almacena');
                //lo del ac irá al espacio de "memoria" nota: el número de memoria está de parametro
                break;
            }
        case '30':
            {
                console.log('Suma');
                //estas son funciones extras
                break;
            }
        case '31':
            {
                console.log('Resta');
                //estas son funciones extras
                break;
            }
        case '32':
            {
                console.log('Divide');
                //estas son funciones extras
                break;
            }
        case '33':
            {
                console.log('Multiplica');
                //estas son funciones extras
                break;
            }
        case '40':
            {
                console.log('Bifurca');
                //justo lo que hizo
                break;
            }
        case '41':
            {
                console.log('Bifurca si Negativo');
                //justo lo que hizo
                break;
            }
        case '42':
            {
                console.log('Bifurca si Cero');
                //justo lo que hizo
                break;
            }
        case '43':
            {
                console.log('Fin Programa');
                //justo lo que hizo
                break;
            }
        default:
            {
                console.log('error');
                break;
            }
    }
}