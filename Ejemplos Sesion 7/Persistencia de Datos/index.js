const http = require('http');
const fs = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

http.createServer(async (req, res) =>{
    const { searchParams, pathname } = new URL(req.url, `https://${req.headers.host}`)
    const params = new URLSearchParams(searchParams);

    if(pathname == '/comics' && req.method == 'GET'){
        const lecturaArchivo = await fs.readFile('comics.txt');
        res.write(lecturaArchivo);
        res.end();
    }

    if(pathname == '/comics' && req.method == 'POST'){
        const archivoOriginal = await fs.readFile('comics.txt');
        const datosOriginales = JSON.parse(archivoOriginal);
        const id = uuidv4();
        let datosComic;

        req.on('data', (data)=>{
            datosComic = JSON.parse(data);
            console.log(datosComic);
        })
        req.on('end', async ()=>{
            datosOriginales[id] = datosComic;
            await fs.writeFile('comics.txt', JSON.stringify(datosOriginales, null, 2));
            res.write('Comic agregado exitosamente');
            res.end();
        })
    }

    if(pathname == '/comics' && req.method == 'PUT'){
        const id = params.get('id');
        const datosArchivo = await fs.readFile('comics.txt');
        const objetoArchivoOriginal = JSON.parse(datosArchivo);
        let datosParaModificar;
        req.on('data', (datos) =>{
            datosParaModificar = JSON.parse(datos);
        })
        req.on('end', async ()=>{
        //     código para actualizar datos
            const comicOriginal = objetoArchivoOriginal[id]
            const comicActualizado = { ...comicOriginal, ...datosParaModificar }

            objetoArchivoOriginal[id] = comicActualizado;

            await fs.writeFile('comics.txt', JSON.stringify(objetoArchivoOriginal, null, 2));

            res.write('Los datos han sido actualizados exitosamente');
            res.end();
        })
    }

    if(pathname == '/comics' && req.method == 'DELETE'){
        const comicsOriginales = await fs.readFile('comics.txt');
        const objetoComicsOriginal = JSON.parse(comicsOriginales);
        const id = params.get('id');
        delete objetoComicsOriginal[id];

        await fs.writeFile('comics.txt', JSON.stringify(objetoComicsOriginal, null, 2));

        res.write('El comic se ha eliminado exitosamente');
        res.end();
    }
})

.listen(3000, function(){
    console.log('Servidor iniciado en el puerto 3000')
});