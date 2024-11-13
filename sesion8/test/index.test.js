import {assert, should} from 'chai';
import {sumar} from "../index.js";

// Debemos invocar a la función should
should();


//Creando nuestras pruebas unitarias
describe('Sumatoria de 2 numeros', () => {
    it('Retorna 4 si le pasamos 2 + 2', () => {
        const suma = sumar(2, 2)
        const resultado = 4;
        // assert.equal(suma, resultado);
        suma.should.equal(resultado);
    })
    it('Debe devolver un NaN si alguno de los valores no son un numero')
    const suma = sumar(2, "hola")
    assert.isNaN(suma)
})