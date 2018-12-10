var memoria = [];
var text;
var count;
var lines;
var PC = 0;
var acumulador = 0;

function modificarDiv(numero) {
    $('#lineas').html(' ');
    for (var i = 0; i < numero; i++) {
        if (i < 100) {
            if (i < 10) {
                $('#lineas').append(
                    `<div> 00${ i } </div>`
                );
            } else {
                $('#lineas').append(
                    `<div> 0${ i } </div>`
                );
            }
        } else {
            $('#lineas').append(
                `<div> ${ i } </div>`
            );
        }
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
    PC = 0;
    $("#notificaciones").html('');
    texto = $("#instrucciones").val();
    var partes = texto.split("\n");
    for (var i = 0; i < partes.length; i++) {
        memoria[i] = partes[i];
    }
    var accion;
    var memoriaOp;
    while (PC != -1) {
        if (validar(memoria[PC], PC)) {
            accion = memoria[PC].substr(1, 2);
            memoriaOP = memoria[PC].substr(3, 4, 5);
            PC = PC + 1;
            accionEval(accion, memoriaOP);
            $("#infoPC").html(PC);

        } else {
            PC = -1;
            break;
        }
    }
    console.log(memoria);

    PC = 0;
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

function validar(parte, numero) {
    if (parte == undefined) {
        $("#notificaciones").append(` <div class="card" style="color: red; font-size: 20px;"> <i class="fa fa-exclamation-circle" aria-hidden="true">${numero+1}: ERROR, sección indefinida</i> </div>`);
        return false;
    }
    var tamaño = parte.length;
    if (tamaño != 6) {
        $("#notificaciones").append(` <div class="card" style="color: red; font-size: 20px;"> <i class="fa fa-exclamation-circle" aria-hidden="true">${numero+1}: ERROR, TAMAÑO INVÁLIDO ${parte}</i> </div>`);
        return false;
    }
    if (parte.substr(0, 1) != '+') {
        $("#notificaciones").append(` <div class="card" style="color: red; font-size: 20px;"> <i class="fa fa-exclamation-circle" aria-hidden="true">${numero+1}: ERROR, FALTA "+"  ${parte}</i> </div>`);
        return false;
    }
    for (var i = 1; i < tamaño; i++) {
        if (!(parte.charCodeAt(i) >= 48 && parte.charCodeAt(i) <= 57)) {
            $("#notificaciones").append(` <div class="card" style="color: red; font-size: 20px;"> <i class="fa fa-exclamation-circle" aria-hidden="true">${numero+1}: ERROR, INSTRUCCION INVÁLIDA  ${parte}</i> </div>`);
            return false;
        }
    }
    return true;
}

function accionEval(accion, numero) {
    switch (accion) {
        case '10':
            {
                var ingreso;
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero}</i></div>`);
                ingreso = prompt('Ingresa el número');
                for (var i = 0; i < ingreso.length; i++) {
                    if (ingreso.charCodeAt(i) >= 48 && ingreso.charCodeAt(i) <= 57) {
                        memoria[numero] = ingreso;
                        $("#infoPC").html(PC);
                        $("#infoAC").html(acumulador);
                    } else {
                        PC = -1;
                        $("#notificaciones").append(` <div class="card" style="color: red; font-size: 20px;"> <i class="fa fa-exclamation-circle" aria-hidden="true">ERROR, SE INGRESÓ CARACTER INVÁLIDO +${accion + numero}</i> </div>`);
                        break;
                    }
                }
                break;
            }
        case '11':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero}</i></div>`);
                $("#consolaSalida").css('display', 'flex');
                $("#consolaSalidaDiv").html(memoria[numero]);
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '20':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero}</i></div>`);
                //se pedirá mediante "memoria" al arreglo de objetos para mandarlo al ACUMULADOR
                acumulador = memoria[numero];
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '21':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero}</i></div>`);
                //lo del ac irá al espacio de "memoria" nota: el número de memoria está de parametro
                memoria[numero] = acumulador;
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '30':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero}</i></div>`);
                acumulador = parseInt(acumulador) + parseInt(memoria[numero]);
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '31':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero} </i></div>`);
                acumulador = parseInt(acumulador) - parseInt(memoria[numero]);
                //estas son funciones extras
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '32':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero}</i></div>`);
                acumulador = parseInt(acumulador) / parseInt(memoria[numero]);
                //estas son funciones extras
                break;
            }
        case '33':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero}</i></div>`);
                acumulador = parseInt(acumulador) / parseInt(memoria[numero]);
                //estas son funciones extras
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '40':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero} </i></div>`);
                PC = parseInt(numero) - 1;
                //justo lo que hizo
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '41':
            {
                if (parseInt(acumulador) < 0) {
                    PC = parseInt(numero) - 1;
                    $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero}</i></div>`);
                }
                //justo lo que hizo
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '42':
            {
                if (parseInt(acumulador) == 0) {
                    PC = parseInt(numero) - 1;
                    $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> Instruccion  +${accion} <i class="fa fa-arrow-right" aria-hidden="true"></i> SALTÓ,  A <i class="fa fa-arrow-right" aria-hidden="true"></i> ${numero} </i></div>`);
                }
                //justo lo que hizo
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '43':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> Instruccion  +${accion} <i class="fa fa-arrow-right" aria-hidden="true"></i> ¡FIN! </i></div>`);
                PC = -1;
                $("#infoPC").html('Fin');
                $("#infoAC").html(acumulador);
                break;
            }
        default:
            {
                alert('OPERACION INVÁLIDA');
                $("#notificaciones").append(` <div class="card" style="color: red; font-size: 20px;"> <i class="fa fa-exclamation-circle" aria-hidden="true"> ERROR  +${accion+numero}</i> </div>`);
                PC = -1;
                $("#infoPC").html('Fin');
                $("#infoAC").html(acumulador);
                break;
            }
    }
}