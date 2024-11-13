//Trabajando con el sistema de módulos : Commonjs
// const { sumar, restar } = require('./operaciones');

import {sumar, restar}  from './operaciones.js';

// Importando modulos nativos de NODE.JS
import {writeFile} from 'node:fs';

writeFile('datos.txt', 'Estoy que me hago pipí', (error)=>{
    if(error) {
        console.log(`Uuf me hice pipí ${error}`);
    }else {
        console.log('Alcancé a hacer pipí')
    }
})

console.log(sumar(15,15));
console.log(restar(59,23));

console.log(import.meta.url);
