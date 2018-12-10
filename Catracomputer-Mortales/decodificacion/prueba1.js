   function Desestructuracion(pc,operacion,descripcion) {
    document.getElementById("demo").innerHTML = "Ubicacion en memoria: "+pc+"operacion: "+operacion" ,"+descripcion;
   }




    function Obtencion() {
    var x = document.getElementById("instrucciones").value;
    var instruccionesArray = x.split('\n');

    instruccionesArray.pop();

    var tamanio = instruccionesArray.length;
    
    //document.getElementById("demo").innerHTML = instruccionesArray;

    var acumulador=0;
    var pc=0;
    var operacion=0;
    var memoria=0;
    //prueba saltos
    //var instruccionesArray = ['10009','10010','20009','31010',
    //'41007','11009','43000','11010','43000','00000','00000'];
    

while(pc!=-1) {     
    var instruccion=instruccionesArray[pc];
    
    operacion=parseInt(instruccion.substr(0,2));

    memoria=parseInt(instruccion.substr(2,3));
    
    

 switch(operacion) {
  case 10:
      descripcion="Lectura";
      numero=prompt('Ingrese un numero:','');
      instruccionesArray[memoria]=numero.toString().padStart(5,'0');
      pc=pc + 1;

    break;
  case 11://salida por ahora
       descripcion="Escritura";
       window.alert(instruccionesArray[memoria]);
       pc= pc + 1;
    break;
  case 20:
      descripcion="Carga contenido en el acumulador";
      acumulador=parseInt(instruccionesArray[memoria]);
      pc=pc+1;
    
    break;
  case 21:
      descripcion="Almacena en la posicion "+ memoria ;
      instruccionesArray[memoria]=  acumulador.toString().padStart(5,'0');
      pc=pc+1;
    break;
  case 30:
    descripcion="Suma";
    acumulador = acumulador + parseInt(instruccionesArray[memoria]);
    pc=pc+1;
    break;
  case 31:
    descripcion="Resta";
    acumulador = acumulador - parseInt(instruccionesArray[memoria]);
    pc=pc+1;
    break;
  case 32:
    descripcion="Division";
    acumulador = parseInt(instruccionesArray[memoria])/ acumulador;
    pc=pc+1;
    break;
  case 33:
    descripcion="Multiplicacion";
    acumulador = acumulador * parseInt(instruccionesArray[memoria]);
    pc=pc+1;
    break;
  case 40:
    descripcion="Salto a la instruccion en la posicion "+ memoria;
    pc=parseInt(memoria);
    break;
  case 41:
      if(acumulador < 0){
          descripcion="Bifurcacion Negativa,salto a la instruccion de la posicion "+ memoria;
          pc=parseInt(memoria);
      }else{
          descripcion="No se cumple la condicion del salto,continua en la siguiente instruccion";
          pc=pc + 1;
      }
    break;
  case 42:
      if(acumulador == 0){
          descripcion="Salto a la instruccion en la posicion "+ memoria;
          pc=parseInt(memoria);
      }else{
          descripcion="No se cumple la condicion del salto,continua en la siguiente instruccion";
          pc=pc + 1;
      }
    
    break;
  case 43:
     descripcion="Fin del Programa";
     window.alert('fin del programa');
     pc=-1;
    break;

  default:
      document.getElementById("desestru").innerHTML ="Algo anda mal";
      pc=-1;
  }
  function Desestructuracion(pc,operacion,descripcion);

}

}