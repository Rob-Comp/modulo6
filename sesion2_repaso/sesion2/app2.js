//      destructuring 
import { faker } from '@faker-js/faker';

function nombres(){
    for(let i=1; i <= 10; i++){
        console.log(`${i}- ${faker.person.fullName()}`);
        console.log('-------')
    }
}
// nombres();

function saludar(){
    console.log('Hola! Qué tal?')
}

export {nombres,saludar};