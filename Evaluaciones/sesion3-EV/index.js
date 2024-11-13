import object from "./celular.js";

//• Importa el objeto en tu archivo index.js, utilizando la desestructuración de objetos.
let { owner, model, color, weight, type, date } = object;

//• Crea una función que muestre por pantalla la descripción de tu celular, utilizando
// template literals, y las variables recogidas del objeto importado desde el archivo
// celular.js.

console.log(`
    - Este teléfono es de ${owner}, y es un hermoso ${model} ${color}.
    - Ah si?
    - Si, mira ¡Es muy liviano! Cómo si pesara no más de ${weight}.
    - Me gusta más que el antiguo, porque tiene la entrada ${type}
    - Y qué tal? Da la hora si quiera?
    - Al menos dice la fecha y de forma extraña. Hoy es ${date}
`);

//• Escribe un ejemplo de función de callback (puedes utilizar las revisadas en el primer y
// segundo CUE), pero esta vez utilizando la sintaxis de función de flecha.

