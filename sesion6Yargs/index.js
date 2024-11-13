// import { type } from 'node:os';
// import {argv} from 'node:process';
// console.log(argv);
// console.log(argv[2]);
// console.log(argv[3]);
// const tipo = argv[2];
// const valor = parseInt(argv[3]);
// console.log(valor);

// if(tipo === 'contar'){
//     //console.log(typeof(Number(valor)));
//     //console.log(isNaN(valor));

//     if(!isNaN(valor)) {
//         for(let i=1; i <= valor;i++){
//             console.log(i);
//         }
//     }else{
//         console.log('Debe indicar un valor numérico');
//     }

// }else{
//     console.log('Enviar que desea hacer - indique la palabra "contar"');
// }

//Trabajando con nuestra app de tareas (id - titulo - completada) - M6 - Sesión 5 - Continuación
//Importando la función creartarea desde el archivo tareas.js
import yargs from 'yargs';
import {
    actualizarTareas,
    crearTarea,
    listarTareas,
    eliminarTarea
} from "./tareas.js";


//Comandos que el usuario puede mandar desde la consola: crear - listar - modificar - eliminar
// CRUD - Archivos en formato JSON
// const [comando, ...argrs] = process.argv.slice(2);
//console.log(comando);
//console.log(argrs);

// Trabajando con YARGS
const argumentos = yargs(process.argv.slice(2))
    .command('crear','Agregar nuevas tareas',{
        titulo: {
            describe: 'titulo de la tarea',
            demandOption: true,
            type: 'string'
        }
    })
    .command('listar','listar las tareas')
    .command('actualizar','actualizar las tareas por ID',{
        id: {
            describe: 'Ingrese el ID',
            type: 'number',
            demandOption: true
        },
        terminada:{
            describe: 'Nuevo estatus de la tarea',
            demandOption: true,
            type: 'boolean'
}
    })
    .command('eliminar','eliminar las tareas',{
        id: {
            describe: 'Ingrese el ID',
            demandOption: true,
            type: 'number',
        }
    })
    .help()
    .argv;

const principal = async () => {
    switch (argumentos._[0]) {
        case 'crear':
            await crearTarea(argumentos.titulo)
            break;
        case 'listar':
            await listarTareas();
            break;
        case 'actualizar':
            await actualizarTareas(argumentos.id, argumentos.terminada);
            break;
        case 'eliminar':
            await eliminarTarea(argumentos.id);
            break;
        default:
            console.log('Debe especificar un comando: crear - listar - actualizar - eliminar');
            break;
    }
}

//Invocar a nuestra función
principal();