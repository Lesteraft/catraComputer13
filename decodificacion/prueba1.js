    var acumulador=0;
    var pc=0;
    var operacion=0;
    var memoria=0;
    //prueba
    var instruccionesArray = ['10007','10008','20007','30008',
    '21009','11009','43000','00000','00000','00000'];


while(pc!=-1) {     
    var instruccion=instruccionesArray[pc];
    
    operacion=parseInt(instruccion.substr(0,2));

    memoria=parseInt(instruccion.substr(2,3));
    
    
   
    
 switch(operacion) {
  case 10:
      
      numero=prompt('Ingrese un numero:','');
      instruccionesArray[memoria]=numero.toString().padStart(5,'0');
      pc=pc + 1;

    break;
  case 11://salida por ahora
       window.alert(instruccionesArray[memoria]);
       pc= pc + 1;
    break;
  case 20:
      acumulador=parseInt(instruccionesArray[memoria]);
      pc=pc+1;
    
    break;
  case 21:
      instruccionesArray[memoria]=  acumulador.toString().padStart(5,'0');
      pc=pc+1;
    break;
  case 30:
    acumulador = acumulador + parseInt(instruccionesArray[memoria]);
    pc=pc+1;
    break;
  case 31:
    acumulador = acumulador - parseInt(instruccionesArray[memoria]);
    pc=pc+1;
    break;
  case 32:
    acumulador = parseInt(instruccionesArray[memoria])/ acumulador;
    pc=pc+1;
    break;
  case 33:
    acumulador = acumulador * parseInt(instruccionesArray[memoria]);
    break;
  case 40:
    code block
    break;
  case 41:
    code block
    break;
  case 42:
    code block
    break;
  case 43:
     window.alert('fin del programa');
     pc=-1;
    break;

  default:
      window.alert('algo anda mal');
      pc=-1;
}
}