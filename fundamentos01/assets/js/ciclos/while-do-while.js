

const carros = ['Mazda', 'Mercedez', 'Toyota', 'BMW'];


let i = 0;

// while(i <= carros.length){

//     console.log(carros[i]);

//     i++;
// }


console.warn('While');

while (carros[i]) {
    if (i === 1) {
        // break;
        i++
        continue;
    }
    console.log(carros[i]);

    i++;
}

// undefined
// null             Son considerador falso en estructuras de control o cliclos
// false






console.warn('Do While');



let j = 0;

do {
    // La unica diferencia entre estos dos, es que esta ejecutara el codigo aunque sea una vez
    console.log(carros[j]); 
    j++;
} while (carros[j]); // Se sigue repitiendo mientras esta condición sea correcta


