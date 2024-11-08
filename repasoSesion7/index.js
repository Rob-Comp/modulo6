import http from 'node:http';
import { obtenerTareas } from './tareas.js';
const PORT = 3001;
// Creando el servidor
http
    .createServer(async (req, res) => {
    // const method = req.method;
    // const url = req.url;
    // Atrapando por destructuring
    // const {method, url} = req;
    // console.log(method, url);

    try{
    switch (req.method) {
        case 'POST':
            if(req.url === '/agregar' && req.method == 'POST'){
                res.write('Vas a agregar nueva tarea');
            }
            break;

        case 'GET':
            if(req.url === '/listar' && req.method == 'GET'){
                res.write('Vas a listar las tareas');
                const tareas = await obtenerTareas();
                if(tareas.length > 0){
                    res.end(JSON.stringify(tareas));
                }else{
                    res.end("Mensaje Se completó la operacion, pero la consulta esta vacía")
                }
            }
            break;
        default:
            res.end('No hay encontrado');
            break;
    }
    }catch(e){
        console.error('Errorrrr...');
        res.end('Error interno del servidor');
    }
})
.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})