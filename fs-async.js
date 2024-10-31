// modulo nativo - fs - File System
// Async ---> Promises
import { readFile } from 'fs/promises';

const getData = async ()=>{
    try{
        const users = await readFile('usuario.json', 'utf8');
    //     Transformando de string a json --- JSON.PARSE()
        const usersJSON = JSON.parse(users);
        console.log(usersJSON);
        console.log('--------')
        for (const user of usersJSON){
            console.log(user)
            console.log(`Nombre: ${user.nombre} | Edad: ${user.edad} | Ciudad: ${user.ciudad}`);
        }

    } catch (error){
        console.log(error);
    }
}

getData();