import yargs from 'yargs';
import { v4 as uuidv4 } from 'uuid';
// console.log(yargs());
// console.log(yargs(process.argv).argv);

export const argumentos = yargs(process.argv.slice(2)).argv;
// console.log(argumentos);
// console.log(argumentos._[0])

export const id = uuidv4().slice(0,4);
console.log(id);