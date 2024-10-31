import axios from "axios";

//impactar una API externa (obvio), y coinsumir sus datos del lado del back end
const usuariosAPI = async () =>{
    try {
        const respuesta = await axios.get('https://randomuser.me/api/?results=1')
        const {results} = respuesta.data;

        // results.forEach(user => {
        //     console.log(`
        //     Nombre: ${user.name.first}\n
        //     Telélono: ${user.phone} \n
        //     `);
        // })

        for (const user of results){
            console.log(`
            Nombre: ${user.name.first}\n
            Telélono: ${user.phone} \n
            `)
        }

    } catch (error) {
        console.error(`Tengo malas noticias...${error.message}`)
    }
}
// Invocando a la funcion
usuariosAPI();