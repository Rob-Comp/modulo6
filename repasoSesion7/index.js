import http from 'node:http';
import {obtenerTareas, crearTarea, actualizarTareas} from './tareas.js';

const PORT = 3001;
// Creando el servidor
http
    .createServer(async (req, res) => {

        const {searchParams, pathname} = new URL(req.url, `https://${req.headers.host}`)
        const params = new URLSearchParams(searchParams);
        console.log(`Conexión exitosa.... pathname: ${pathname}`);
        // const method = req.method;
        // const url = req.url;
        // Atrapando por destructuring
        // const {method, url} = req;
        // console.log(method, url);
        const id = Number(req.url.split('/')[2]);
        const rutaPut = Number(req.url.split('/'));
        console.log(rutaPut)
        console.log(id)
        console.log(params)

        try {
            switch (req.method) {
                case 'POST':
                    if (req.url == "/agregar") {
                        // res.write('Vas a agregar nueva tarea');
                        let body = '';
                        req.on('data', (data) => {
                            body += data.toString();
                        })
                        req.on('end', async () => {
                            const nuevaTarea = JSON.parse(body);
                            // console.log(nuevaTarea);
                            const tareaCreada = await crearTarea(nuevaTarea.titulo);
                            res.writeHead(201, {'Content-Type': 'application/json'});
                            res.end(JSON.stringify(tareaCreada));
                        })
                    } else {
                        res.writeHead(404, {'Content-Type': 'application/json'});
                        res.end(404, {'mensaje:': 'Ruta no encontrada'})
                    }
                    break;

                case 'GET':
                    if (req.url === '/listar' && req.method == 'GET') {
                        res.write('Vas a listar las tareas');
                        const tareas = await obtenerTareas();
                        if (tareas.length > 0) {
                            res.end(JSON.stringify(tareas));
                        } else {
                            res.end("Mensaje Se completó la operacion, pero la consulta esta vacía")
                        }
                    }
                    break;
                case 'PUT':
                    // if (req.url == "/actualizar") {

                        // console.log(typeof (Number(req.url.split('/'))));
                        if (!isNaN(id)) {
                            let body = '';
                            req.on('data', (data) => {
                                body += data.toString();
                            })
                            req.on('end', async () => {
                                const datosActualizados = JSON.parse(body);
                                const tareaActualizada = await actualizarTareas(id, datosActualizados.completada)
                                console.log(datosActualizados)


                                if (tareaActualizada) {
                                    res.writeHead(200, {'Content-Type': 'application/json'})
                                    res.end(JSON.stringify(tareaActualizada));
                                } else {
                                    res.writeHead(404, {'Content-Type': 'application/json'});
                                    res.end(JSON.stringify({'mensaje': 'Tarea Actualizada'}));
                                }
                            })
                        // }
                    } else {
                        res.writeHead(404, 'Por favor indique un ID')
                        res.end(JSON.stringify({'mensaje': 'Ruta no encontrada'}));
                    }
                    break;

                default:
                    res.end('No hay encontrado');
                    break;
            }
        } catch (e) {
            console.error('Errorrrr...');
            res.end('Error interno del servidor');
        }
    })
    .listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    })