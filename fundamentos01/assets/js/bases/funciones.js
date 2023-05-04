

function saludar(nombre){
    // console.log("Hola " + nombre);
    // console.log(arguments);

    return [1,2,3,4,5]; //Cuando la función no tenga esta declaración entonces siempre devolvera Undefined.

    console.log("Soy un codigo que va despues del return"); // Lo que está después del return, jamas se ejecutara
}



const saludar2 = function(nombre){
    console.log("Hola " + nombre);  // Función anonima
}



const saludarFlecha = () => {
    console.log("Hola Flecha");
}
const saludarFlecha1 = (nombre) => {
    console.log("Hola " + nombre);
}

// saludarFlecha1("melisa");


const retornoDeSaludar = saludar('Fernando', 40, true, "Costa Rica");

// console.log(retornoDeSaludar);



function sumar (a,b){
    return a + b ; 
}

// console.log( sumar( 3 , 5 ) ) ;

const sumar2 = ( a , b ) =>{

    return a + b;
}

// console.log( sumar2 ( 3 , 6 ));


const sumar3 = ( a , b ) => a + b; // Cuando se recibe solo una línea de codigó, podemos utilizar esta sintaxis

// console.log( sumar3 ( 5 , 7 ));


function getAleatorio (){

    return Math.random();

}


const getAleatorio1 = () => Math.random();

console.log(getAleatorio1());