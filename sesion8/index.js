export const sumar = (valor1, valor2)=>{
    if(typeof(valor1)!= "number" || typeof(valor2)!= "number"){
        return NaN
    }
    return valor1 + valor2;
}
