

let personajes = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad : 40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip:'12358, 456654',
        ubicacion:'Malibu, California'
    }

};


delete personajes.edad;
personajes.casado = true;

console.log(`Nombre ${personajes.nombre}`);
console.log(`Nombre ${personajes.nombre}`);


Object.freeze( personajes ); // Bloquear datos de un objeto 


personajes.dinero = 1000000;

personajes.direccion.ubicacion = 'costa Rica';




const propiedades =  Object.getOwnPropertyNames( personajes ); // Obtener las propiedades de un objeto
const valores =  Object.values( personajes ); // Obtener los valores de un objeto

console.log( {propiedades, valores} );

