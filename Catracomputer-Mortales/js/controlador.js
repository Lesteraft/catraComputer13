var memoria = [];
var text;
var count;
var lines;
var PC = 0;
var acumulador = 0;
var comenzar = true;
var partes;

function modificarDiv(numero) {
    $('#lineas').html(' ');
    for (var i = 0; i < numero; i++) {
        $('#lineas').append(
            `<div> ${ i.toString().padStart(3, '0') } </div>`
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
    $("#consolaSalidaDiv").html('');
    PC = 0;
    $("#notificaciones").html('');
    texto = $("#instrucciones").val();
    var partes = texto.split("\n");
    for (var i = 0; i < partes.length; i++) {
        memoria[i.toString().padStart(3, '000')] = partes[i];
    }
    var accion;
    var memoriaOp;
    while (PC != -1) {
        console.log(PC);
        if (validar(memoria[PC.toString().padStart(3, '000')], PC)) {
            accion = memoria[PC.toString().padStart(3, '000')].substr(1, 2);
            memoriaOP = memoria[PC.toString().padStart(3, '000')].substr(3, 4, 5);
            PC = PC + 1;
            $("#infoPC").html(PC.toString().padStart(3, '000'));
            accionEval(accion, parseInt(memoriaOP));
        } else {
            PC = -1;
            break;
        }
    }
    console.log(memoria);

    PC = 0;
});

$("#btnStop").click(function() {
    console.log('click en stop');
    //
    $("#infoPC").html("0");
    $("#infoAC").html("0");
    $('#instrucciones').html(" ");
    $('#notificaciones').html(" ");
});


$("#btnSiguiente").click(function() {
    console.log('click en siguiente');

});


$("#btnPaso").click(function() {
    var accion;
    var memoriaOp;

    if (comenzar) {
        PC = 0;
        comenzar = false;
        console.log('click en paso');
        //PC = parseInt($("#infoPC").val());

        $("#notificaciones").html('');
        texto = $("#instrucciones").val();
        partes = texto.split("\n");
        for (var i = 0; i < partes.length; i++) {
            memoria[i] = partes[i];
        }

        if (validar(memoria[PC], PC)) {
            accion = memoria[PC].substr(1, 2);
            memoriaOP = memoria[PC].substr(3, 4, 5);
            PC = PC + 1;
            accionEval1_AL(accion, parseInt(memoriaOP));
        } else {
            PC = -1;
        }
        console.log(memoria);
    } else {
        console.log('2');
        if (validar(memoria[PC], PC)) {
            accion = memoria[PC].substr(1, 2);
            memoriaOP = memoria[PC].substr(3, 4, 5);
            PC = PC + 1;
            accionEval1_AL(accion, parseInt(memoriaOP));
        } else {
            PC = -1;
        }
        console.log(memoria);
    }
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
                var ingreso = '';
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                while (ingreso == '') {
                    ingreso = prompt('Ingresa el número para almacenarlo en: ' + numero);
                    console.log(ingreso);

                    for (var i = 0; i < ingreso.length; i++) {
                        if (ingreso.charCodeAt(i) >= 48 && ingreso.charCodeAt(i) <= 57) {
                            memoria[numero.toString().padStart(3, '000')] = ingreso.toString().padStart(6, "+00000");
                            $("#infoPC").html(PC);
                            $("#infoAC").html(acumulador);


                        } else {
                            PC = -1;
                            $("#notificaciones").append(` <div class="card" style="color: red; font-size: 20px;"> <i class="fa fa-exclamation-circle" aria-hidden="true">ERROR, SE INGRESÓ CARACTER INVÁLIDO +${accion + numero.toString().padStart(3, '0')}</i> </div>`);
                            break;
                        }
                    }
                }
                break;
            }
        case '11':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                $("#consolaSalidaDiv").html(parseInt(memoria[numero.toString().padStart(3, '000')]));
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '20':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                //se pedirá mediante "memoria" al arreglo de objetos para mandarlo al ACUMULADOR
                acumulador = memoria[numero.toString().padStart(3, '000')];
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '21':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                //lo del ac irá al espacio de "memoria" nota: el número de memoria está de parametro
                if (parseInt(acumulador) < 0) {
                    acumulador = (parseInt(acumulador) * -1);
                    memoria[numero.toString().padStart(3, '000')] = acumulador.toString().padStart(6, '+000000');
                    $("#infoPC").html(PC);
                    $("#infoAC").html(acumulador);
                } else {
                    memoria[numero.toString().padStart(3, '000')] = acumulador.toString().padStart(6, '+000000');
                    $("#infoPC").html(PC);
                    $("#infoAC").html(acumulador);
                }
                break;
            }
        case '30':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                acumulador = parseInt(acumulador) + parseInt(memoria[numero.toString().padStart(3, '000')]);
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);

                break;
            }
        case '31':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')} </i></div>`);
                acumulador = parseInt(acumulador) - parseInt(memoria[numero.toString().padStart(3, '000')]);
                //estas son funciones extras
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '32':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                acumulador = parseInt(acumulador) / parseInt(memoria[numero.toString().padStart(3, '000')]);
                //estas son funciones extras
                break;
            }
        case '33':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                acumulador = parseInt(acumulador) / parseInt(memoria[numero.toString().padStart(3, '000')]);
                //estas son funciones extras
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '40':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> Instruccion  +${accion} <i class="fa fa-arrow-right" aria-hidden="true"></i> SALTÓ,  A <i class="fa fa-arrow-right" aria-hidden="true"></i> ${numero}</i></div>`);
                PC = (numero);
                //justo lo que hizo
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '41':
            {
                if (parseInt(acumulador) < 0) {
                    PC = (numero);
                    $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> Instruccion  +${accion} <i class="fa fa-arrow-right" aria-hidden="true"></i> SALTÓ,  A <i class="fa fa-arrow-right" aria-hidden="true"></i> ${numero} </i></div>`);
                }
                //justo lo que hizo
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '42':
            {
                if (parseInt(acumulador) == 0) {
                    PC = (numero);
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


//funcion para hacer pruebas
function accionEval1_AL(accion, numero) {
    switch (accion) {
        case '10':
            {
                var ingreso;
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                ingreso = prompt('Ingresa el número');
                for (var i = 0; i < ingreso.length; i++) {
                    if (ingreso.charCodeAt(i) >= 48 && ingreso.charCodeAt(i) <= 57) {
                        memoria[numero] = ingreso;
                        console.log(memoria[numero]);

                        $("#infoPC").html(PC);
                        $("#infoAC").html(acumulador);

                    } else {
                        PC = -1;
                        $("#notificaciones").append(` <div class="card" style="color: red; font-size: 20px;"> <i class="fa fa-exclamation-circle" aria-hidden="true">ERROR, SE INGRESÓ CARACTER INVÁLIDO +${accion + numero.toString().padStart(3, '0')}</i> </div>`);
                        break;
                    }
                }
                var textPaso = $("#divPaso").html();
                $("#divPaso").html(textPaso + "\n" + " * Operacion: " + accion + "  ubicacion memoria: " + numero + "  Descripcion: Lectura");

                break;
            }
        case '11':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                $("#consolaSalida").css('display', 'flex');
                $("#consolaSalidaDiv").html(memoria[numero]);
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);

                var textPaso = $("#divPaso").html();
                $("#divPaso").html(textPaso + "\n" + " * Operacion: " + accion + "  ubicacion memoria: " + numero + "  Descripcion: Escritura");

                break;
            }
        case '20':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                //se pedirá mediante "memoria" al arreglo de objetos para mandarlo al ACUMULADOR
                acumulador = parseInt(memoria[numero]);
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                var textPaso = $("#divPaso").html();
                $("#divPaso").html(textPaso + "\n" + " * Operacion: " + accion + "  ubicacion memoria: " + numero + "  Descripcion: carga en el acumulador");

                break;
            }
        case '21':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                //lo del ac irá al espacio de "memoria" nota: el número de memoria está de parametro
                memoria[numero] = acumulador;
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);

                var textPaso = $("#divPaso").html();
                $("#divPaso").html(textPaso + "\n" + " * Operacion: " + accion + "  ubicacion memoria: " + numero + "  Descripcion: almacenamiento");
                break;
            }
        case '30':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                acumulador = parseInt(acumulador) + parseInt(memoria[numero]);
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                var textPaso = $("#divPaso").html();
                $("#divPaso").html(textPaso + "\n" + " * Operacion: " + accion + "  ubicacion memoria: " + numero + "  Descripcion: Suma");

                break;


            }
        case '31':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')} </i></div>`);
                acumulador = parseInt(acumulador) - parseInt(memoria[numero]);
                //estas son funciones extras
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);

                var textPaso = $("#divPaso").html();
                $("#divPaso").html(textPaso + "\n" + "  * Operacion: " + accion + "  ubicacion memoria: " + numero + "  Descripcion: resta");
                break;
            }
        case '32':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                acumulador = parseInt(acumulador) / parseInt(memoria[numero]);

                var textPaso = $("#divPaso").html();
                $("#divPaso").html(textPaso + "\n" + " * Operacion: " + accion + "  ubicacion memoria: " + numero + "  Descripcion: Division");
                //estas son funciones extras
                break;
            }
        case '33':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);
                acumulador = parseInt(acumulador) * parseInt(memoria[numero]);
                //estas son funciones extras
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);

                var textPaso = $("#divPaso").html();
                $("#divPaso").html(textPaso + "\n" + " * Operacion: " + accion + "  ubicacion memoria: " + numero + "  Descripcion: Multiplicacion");
                break;
            }
        case '40':
            {
                $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true">Instruccion +${accion} <i class="fa fa-arrow-right" aria-hidden="true"></i> SALTÓ,  A <i class="fa fa-arrow-right" aria-hidden="true"></i> ${numero} </i></div>`);
                PC = parseInt(numero);
                //justo lo que hizo
                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);

                var textPaso = $("#divPaso").html();
                $("#divPaso").html(textPaso + "\n" + " * Operacion: " + accion + "  ubicacion memoria: " + numero + "  Descripcion: bifurcacion simple");
                break;
            }
        case '41':
            {
                if (parseInt(acumulador) < 0) {
                    PC = parseInt(numero);
                    //var textPaso = $("#divPaso").html();
                    $("#divPaso").html(textPaso + "\n" + " * Operacion: " + accion + "  ubicacion memoria: " + numero + "  Descripcion: bifurcacion Negativa");
                    //PC = parseInt(numero);
                    $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> +${accion + numero.toString().padStart(3, '0')}</i></div>`);

                    var textPaso = $("#divPaso").html();
                    $("#divPaso").html(textPaso + "\n" + " * Operacion: " + accion + "  ubicacion memoria: " + numero + "  Descripcion: bifurcacion Negativa");

                }
                //justo lo que hizo

                $("#infoPC").html(PC);
                $("#infoAC").html(acumulador);
                break;
            }
        case '42':
            {
                if (parseInt(acumulador) == 0) {
                    PC = parseInt(numero);
                    $("#notificaciones").append(`<div class="card" style="color: green; font-size: 20px;"> <i class="fa fa-check-circle" aria-hidden="true"> Instruccion  +${accion} <i class="fa fa-arrow-right" aria-hidden="true"></i> SALTÓ,  A <i class="fa fa-arrow-right" aria-hidden="true"></i> ${numero} </i></div>`);

                    var textPaso = $("#divPaso").html();
                    $("#divPaso").html(textPaso + "\n" + " * Operacion: " + accion + "  ubicacion memoria: " + numero + "  Descripcion: bifurcacion cero");

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

                var textPaso = $("#divPaso").html();
                $("#divPaso").html(textPaso + "\n" + " * Operacion: " + accion + "  ubicacion memoria: " + numero + "  Descripcion: fin programa");
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