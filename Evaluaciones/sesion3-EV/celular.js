// • Crea un nuevo archivo llamado celular.js, que contenga y exporte un objeto.
    // El objeto debe tener como contenido pares llave - valor de, por lo menos, cinco características de
    // tu celular, más un sexto ítem que contenga una fecha generada por moment.

import dayjs from "dayjs";
import 'dayjs/locale/es.js'


//El objeto debe tener como contenido pares llave - valor de, por lo menos, cinco características de
// tu celular, más un sexto ítem que contenga una fecha generada por moment.
const object = {
    owner: "Robert",
    model: "iPhone 22",
    color: "Pinky",
    weight: "200 mg",
    type: "USB C",
    date: dayjs().locale('es').format('DD-MMMM-YY')
}

// • Crea una copia del objeto en celular.js, y actualiza dos de sus propiedades utilizando el
// spread operator.

const objectCopy = {
    ...object,
    owner: "Susana",
    model: "iPhone 26",
    color: "Black",
}
console.log(objectCopy);

//• Crea un nuevo archivo llamado celular.js, que contenga y exporte un objeto.
export default object;

