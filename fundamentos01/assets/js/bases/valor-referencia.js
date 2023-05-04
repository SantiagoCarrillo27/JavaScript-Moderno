
let a = 5;

let b = a;

a =50;

console.log({a,b});

let juan = { nombre: 'Juan' }
let ana = {...juan}; // ... Operador spreed, Simboliza que separa los elementos

ana.nombre = 'Ana'

console.log({juan,ana});


const cambiarNombre = ({...persona}) => { //Operador Spreed en función flecha
    persona.nombre = 'Tony'
    return persona
} 

let peter = {nombre:'Peter' }

let tony = cambiarNombre(peter);

console.log({peter, tony});

// Arreglos

const frutas = ['Manzana', 'Pera', 'Mora'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('Spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('Spread');


otrasFrutas.push('Papaya');


console.table(frutas , otrasFrutas);
