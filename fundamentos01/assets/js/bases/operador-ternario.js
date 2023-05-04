const dia = 6;
const horaActual = 10;


let horaApertura = 11;
let mensaje; // Esta abierto, Esta cerrado

// if ( dia === 0 || dia === 6){

// if ( [0,6].includes(dia) ){
//     console.log("Fin de semana");
//     horaApertura = 9;
// }else{
//     console.log("No es fin de semana");
//     horaApertura = 11;

// }

//RESUMIR CODIGO DE ARRIBA

horaApertura = ( [0,6].includes() ) ? 9 : 11;

// if(horaActual >= horaApertura){
//     mensaje = 'Esta abierto'
// }else{
//     mensaje = `Esta cerrado, hoy abrimos a las  ${horaApertura};`
//}


mensaje = ( horaActual >= horaApertura ) ? 'ESta abierto' : `Esta cerrado, hoy abrimos a las  ${horaApertura}`;

console.log({horaApertura, mensaje});





