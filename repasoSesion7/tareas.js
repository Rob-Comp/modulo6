import fs from 'fs/promises';
const archivoTareas = 'tareas.json';

export const obtenerTareas = async () => {
    try{
    //     Leer el archivo
        const data = await fs.readFile(archivoTareas, 'utf8');
        return JSON.parse(data);
    }catch (e){
        console.error('Error al leer el archivo');
        return[];
    }
}
