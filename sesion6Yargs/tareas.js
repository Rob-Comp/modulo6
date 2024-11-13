//crearTarea - modificarTarea - listarTareas - eliminarTarea
//Persistencia datos - Archivo formato JSON
//Importar módulo nativo fs - Promises
//import fs from 'fs/promises';
import fs from 'fs/promises';
import {argumentos, id} from "./aclaratoria.js";

//Función para leer y pasar un archivo json a un objeto literal [{...}]
const obtenerTareas = async ()=>{
    let tareas = await fs.readFile('./tareasTexto.txt','utf-8');
    return  tareas = JSON.parse(tareas);
}

//Función para guardar en el disco duro nuestro arhivo en formato json
const guardarTareas = async (tareasGuardar)=>{
    await fs.writeFile('./tareasTexto.txt',JSON.stringify(tareasGuardar,null,2));
}


//Función para agregar nuevas tareas
export const crearTarea = async (titulo)=> {
    const tareas = await obtenerTareas();
    console.log(tareas);
    //console.log(Date.now());
    
    const nuevaTarea = {
        id: id,
        titulo: titulo,
        completada: false
    };
    tareas.push(nuevaTarea);
    //console.log(tareas);
    await guardarTareas(tareas);
    console.log('Tarea registrada de manera satisfactoria!!!');
}
//crearTarea('Aprendiendo Node.JS');

//Función para listar las tareas
export const listarTareas = async ()=>{
    const tareas = await obtenerTareas();
    console.log('Listado de tareas');
    console.log('=====================================================');
    //console.log(tareas);
    for (const tarea of tareas) {
        console.log(`Tarea: ${tarea.id}  ${tarea.titulo} ${tarea.completada}`);
    }
}

//Función para actualizar las tareas
export const actualizarTareas = async (id, terminada) =>{
    const tareas = await obtenerTareas();
    //Como yo puedo buscar un valor dentro de un array - find()
    // const tarea = tareas.find(tarea => {
    //     return tarea.id === id;
    // })
    //Otra forma más actual de haceer la función
    //console.log(typeof(id));
    
    const tarea = tareas.find(tarea => {
        //console.log(typeof(tarea.id));
        //console.log('-----------------------');
        return tarea.id === Number(id)
    });
    //console.log(tarea);
    if(tarea){
        tarea.completada = new Boolean(terminada);
        await guardarTareas(tareas);
        console.log(`La tarea  ${id} se actualizo de manera satisfactoria!!!`);
    }else{
        console.log(`La tarea: ${id} no éxiste!!!`);
    }
}

//Función para eliminar tarea - por id
//Micrar la función a ES-6
// export async function eliminarTarea(id){

// }

export const eliminarTarea =  async (id)=>{
    const tareas = await obtenerTareas();
    const nuevastareas = tareas.filter(tarea => tarea.id !== Number(id));
    await guardarTareas(nuevastareas);
    console.log(`La tarea  ${id} se eliminó de manera satisfactoria!!!`);
}

