import fs from 'fs/promises';

const archivoTareas = 'tareas.json';

export const obtenerTareas = async () => {
    try {
        //     Leer el archivo
        const data = await fs.readFile(archivoTareas, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        console.error('Error al leer el archivo');
        return [];
    }
}

async function guardarTareas(tareasGuardar) {
    await fs.writeFile('./tareas.json', JSON.stringify(tareasGuardar, null, 2), 'utf8');
}

export const crearTarea = async (titulo) => {
    const tareas = await obtenerTareas();

    const nuevaTarea = {
        id: Date.now(),
        titulo: titulo,
        completada: false
    }
    tareas.push(nuevaTarea);
    await guardarTareas(tareas)
    console.log('Tarea registrada exitosamente');
    return nuevaTarea
}

// export const actualizarTareas = async (id, body) => {
//     const tareas = await obtenerTareas();
//
//     const tarea = tareas.find(tarea => {
//         return tarea.id === Number(id);
//     })
//
//     if (tarea){
//
//     }
// }

//Función para actualizar las tareas
export const actualizarTareas = async (id, terminada) => {
    const tareas = await obtenerTareas();
    //Como yo puedo buscar un valor dentro de un array - find()
    // const tarea = tareas.find(tarea => {
    //     return tarea.id === id;
    // })
    //Otra forma más actual de hacer la función
    //console.log(typeof(id));

    const tarea = tareas.find(tarea => {
        //console.log(typeof(tarea.id));
        //console.log('-----------------------');
        return tarea.id === Number(id)
    });
    //console.log(tarea);
    if (tarea) {
        tarea.completada = new Boolean(terminada);
        await guardarTareas(tareas);
        console.log(`La tarea  ${id} se actualizo de manera satisfactoria!!!`);
    } else {
        console.log(`La tarea: ${id} no éxiste!!!`);
        return null;
    }
}

//Función para eliminar tarea - por id
export const eliminarTarea =  async (id)=>{
    const tareas = await obtenerTareas();
    const nuevastareas = tareas.filter(tarea => {
        return tarea.id != Number(id)

    });
    await guardarTareas(nuevastareas);
        console.log(`La tarea  ${id} se eliminó de manera satisfactoria!!!`);

}
