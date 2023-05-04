


const San = {
    nombre: 'Junior',
    edad: 22,

    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${this.edad}`);
    }
}
const pedro = {
    nombre: 'Pedro',
    edad: 22
}

const mellisa = {
    nombre: 'Mellisa',
    edad: 22
}

// San.imprimir();


function Persona(nombre, edad){

    console.log('Se ejecutó esta línea ');
    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre } - edad: ${this.edad}`);
    }

    // return undefined Si no tiene un Return explicito, es como si tuviese un Undefined
}

const maria = new Persona('Maria', 19);
const melissa = new Persona('Melissa', 23);

console.log( maria );
console.log( melissa );

maria.imprimir();
melissa.imprimir();