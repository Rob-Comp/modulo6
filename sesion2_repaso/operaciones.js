// Trabajando con el sistema de módulos : Commonjs

// Exportando con enma script algo
// export function sumar(valor1, valor2){
//     return valor1 + valor2;
// }
//
// export function restar(valor1, valor2){
//     return valor1 - valor2;
// }
//console.log(sumar(2,2));
// module.exports = {sumar,restar};

//Exportando de otra forma
function sumar(valor1, valor2){
    return valor1 + valor2;
}

function restar(valor1, valor2) {
    return valor1 - valor2;
}

export {sumar,restar};