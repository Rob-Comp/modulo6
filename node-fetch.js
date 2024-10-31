import fetch from 'node-fetch';
let colorLog = "color:#44eb70; font-size:40px"
//
async function usuarioAPI(){
    try{
        const response = await fetch('https://randomuser.me/api/?results=1');
        const data = await response.json();
        for(const usuario of data.results){
            console.log("c%"+`${usuario.name.first}`, "color:" + colorLog)
        }
    } catch (error){

    }
}

usuarioAPI()