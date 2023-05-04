function crearPersona(nombre, apellido){
    return{
        nombre,
        apellido
    }
}
const persona = crearPersona("Santiago", "Carrillo");

console.log(persona);


// FUNCION FLECHA MAS OPTIMA

const crearPersona2 = (nombre , apellido) => ({nombre, apellido})

const persona2 = crearPersona2('Hola', 'Mundo');

console.log(persona2);




function imprimirArgumentos(){
    console.log(arguments);
}



// Funcion flecha con parametro rest para obtener argumentos de la misma
// Solo puede tener un parametro si tiene el rest
const imprimirArgumentos2 = (edad,...arg) => {
    // console.log({edad,arg}); // Para extraer algún dato en especifico y este queda independiente del arg
    return arg;
}


//Acceder a los datos dentro de los argumentos de una función de flecha
// Arreglo
const [vivo, nombre, casado, saludo] = imprimirArgumentos2(14,false,'juan',true, 'Hola');

console.log({nombre, vivo, casado, saludo});

// Objeto


// Cambiar nombre de variable dentro de la función 

const {apellido :nuevoApellido } = crearPersona2('Hola', 'Mundo');

console.log({nuevoApellido});


