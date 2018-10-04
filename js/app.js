/////////////////////////INICIALIZACION DE VARIABLES/////////////////////
var decimal='0';                                                                     //toma valor 0 si no es decimal y 1 si es decimal
var valor='0';
var signo='0';
var total=0;
var j=0;
var arregloValor=new Array(10);
var arregloSigno=new Array(10);

///////////////////////////FUNCIONES//////////////////////////////
function inicializar(){
   decimal='0';
   valor='0';
   signo='0';
   total=0;
   j=0;
   for(var i=0;i<10;i++){
     arregloValor[i]='0';
     arregloSigno[i]='0';
   }
}
function concatenarValores(a){
  if(valor=='0'){
      valor=a;
  }else{
    valor=valor + a;
  }
  document.getElementById('display').innerHTML = valor;
}

function colocarDecimal(){
  if(decimal==0){
    valor=valor+'.';
    decimal=1;
  }
}
function guardarValor(){
  valor=parseFloat(valor);
  arregloValor[j]=valor;
  arregloSigno[j]=signo;
  valor='0';
  decimal=0;
  signo='0';
  j++;
  document.getElementById('display').innerHTML =valor;
}

function realizarOperacion(){
  for(var i=0;i<10;i++){
    if(i==0){
      total=arregloValor[i];
    }else{
      if(arregloSigno[i-1]=='+'){
        total=total+arregloValor[i];
      }else if(arregloSigno[i-1]=='-'){
        total=total-arregloValor[i];
      }else if(arregloSigno[i-1]=='*'){
        total=total*arregloValor[i];
      }else if(arregloSigno[i-1]=='/'){
        total=total/arregloValor[i];
      }else if(arregloSigno[i]=='='){
        document.getElementById('display').innerHTML ='error';
      }
    }
  }
}

////////////////////FIN FUNCIONES//////////////////////////////

const ids = [...document.querySelectorAll('.tecla')].map(el => el.id);

ids.forEach(function(a){
  document.getElementById(a).addEventListener("mousedown", function(){
    document.getElementById(a).setAttribute("style","transform:scale(0.95,0.95)")

    if(isNaN(a)==true){
      if(a=='on') {
        inicializar();
        document.getElementById('display').innerHTML = '0';
      }else if(a=='sign'|| a=='raiz') {
        document.getElementById('display').innerHTML = 'Error';

      }else if (a=='punto') {
        colocarDecimal();

      }else if (a=='mas') {
        document.getElementById('display').innerHTML = '+';
        signo='+';
        guardarValor();
      }else if (a=='menos') {
        document.getElementById('display').innerHTML = '-';
        signo='-';
        guardarValor();
      }else if (a=='por') {
        document.getElementById('display').innerHTML = '*';
        signo='*';
        guardarValor();
      }else if (a=='dividido') {
        document.getElementById('display').innerHTML = '/';
        signo='/';
        guardarValor();
      }else if (a=='igual') {
        signo='=';
        guardarValor();
        realizarOperacion();
        document.getElementById('display').innerHTML = total;
      }
    }else{
      concatenarValores(a);
    }
  });
  document.getElementById(a).addEventListener("mouseout", function(){
    document.getElementById(a).setAttribute("style","style","transform:scale(1,1)")
  });
})
