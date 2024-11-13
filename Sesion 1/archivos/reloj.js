let alarma1 = ()=> 'Son las 07:10 am, debes ir a trabajar';

let alarma2 = ()=> 'Son las 07:00, aún te quedan 10 minutos';
 
setTimeout(() => {
    console.log(alarma1());    
}, 10000);

console.log(alarma2());
console.log('--------')