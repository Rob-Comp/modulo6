import fs from 'fs/promises';

const argumentosEntrada = process.argv.slice(2);
const color = argumentosEntrada[0];
const puntaje = argumentosEntrada[1];
let objetoDatos = {};
//     Patrones de diseño -- Design patterns

const leerArchivo = async ()=>{
    try{
        const datos = await fs.readFile('datos.txt','utf8');

        if(datos.lenght !== 0){
            objetoDatos = JSON.parse(datos);
        }
        const nuevoObjeto = {...objetoDatos, [color]: puntaje};
        await fs.writeFile('datos.txt', JSON.stringify(nuevoObjeto, null, 2));

        console.log('Objetos encontrados');

    }catch (error){
        console.log('Ha ocurrido un error...');
        console.log(error);
    }
}

leerArchivo();