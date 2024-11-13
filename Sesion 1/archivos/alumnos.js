let alumnos = [
    {
        "nombre" : "Estefania",
        "apellido" : "Roco",
        "email" : "estefania@gmail.com"
    },
    {
        "nombre" : "Nicol",
        "apellido" : "Guzman",
        "email" : "nicol@gmail.com"
    },
    {
        "nombre" : "Miguel",
        "apellido" : "Perez",
        "email" : "miguel@gmail.com"
    },
    {
        "nombre" : "Iñaki",
        "apellido" : "Huarnez",
        "email" : "iñaki@gmail.com"
    }
];

// Recorrer el array de objetos
function recorrer(){
    alumnos.forEach(alumno => {
        console.log(alumno);
    });
}

recorrer();

