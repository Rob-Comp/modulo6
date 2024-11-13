// un callback es una funcion que se pasa como parámetro dentro de otra función
let contador = 0;

let saltos = setInterval(contar,1000);
clearInterval(saltos);

function contar(){
    saltos;
    if(contador == 3){
        console.log(`Vamos en ${contador}`);
        contador++;
    }else{
        console.log('Llegamos al destino');

    }
    
};
contar();
