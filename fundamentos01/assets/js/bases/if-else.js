
let a = 9;

if (a >= 10) { // undefined, null, una asignación
    console.log("A es mayor o igual a 10");
} else {
    console.log("A es menor a 10");
}

// console.log("Fin del programa");


const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes

console.log({ dia });


if (dia === 0) {
    console.log("Domingo");
} else if (dia === 1) {
    console.log("Es lunes");
} else {
    console.log("No es lunes ni domingo");
}


// OBJETOS  

let dias = 2;

const diaLetras = {
    0: 'Domingo',
    1: 'lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
};


// ARREGLOS

const diaLetras2 = [
    'Domingo',
    'lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
];

console.log("Hoy es", diaLetras2[dias] || 'Dia no definido');