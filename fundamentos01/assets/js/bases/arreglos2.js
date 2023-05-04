

let juegos = ['Mario', 'Zelda', 'Metroid', 'Chrono'];

// console.log('Largo:', juegos.length );

// let primero = juegos[2 - 2];
// let ultimo = juegos [juegos.length - 1 ];


// console.log({primero, ultimo});


juegos.forEach( (elemento, indice, arr ) => {
    console.log({elemento, indice, arr});
} );


let nuevaLongitud = juegos.push('F-zero');


console.log(nuevaLongitud, juegos);


nuevaLongitud =  juegos.unshift('fire Emblem');


console.log({nuevaLongitud, juegos});


let juegoBorrado = juegos.pop();

console.log(juegoBorrado, juegos);


let pos = 1;

let juegosBorrados = juegos.splice(pos, 2);


console.log({juegoBorrado, juegos});


let metroidIndex = juegos.indexOf('Metroid'); //

console.log({metroidIndex});


// TODO: Referencia 
