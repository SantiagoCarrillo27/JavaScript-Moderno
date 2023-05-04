const regresaTrue = () =>{
    console.log('regresa true');
    return true;
};

const regresaFalse = () =>{
    console.log('regresa false');
    return false;
};

console.warn('Not o la negación');

console.log( true );
console.log( !true );
console.log( !false );

console.log(!regresaFalse()); // TRUE


console.warn('And'); // True si todos los valores, son verdaderos

console.log( true && true ); // True
console.log( true && false ); // False

console.log('==========');

console.log(regresaFalse() && regresaTrue()); // Cuando la primera instrucción regresa false, entonces no se ejecuta el resto.

console.log(  regresaTrue() && regresaFalse()); 



console.warn('OR'); // TRUE


console.log(true || false); // Si uno de los dos se cumple, siempre devolvera true
console.log(false || false); // False

console.log(regresaFalse() || regresaTrue());


console.warn('Asignaciones');


const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const soyFalso = false;

const a1 = true && 'Hola Mundo';
const a2 = 'Hola' && 'Mundo'&& soyFalso && true ; // Siempre saldra false, ya que no todas se cumplen
const a3 = soyFalso || 'Ya no soy falso'
const a4 = soyFalso || soyNull || soyUndefined || 'Ya no soy falso'
const a5 = soyFalso || regresaTrue() || soyUndefined || 'Ya no soy falso'

console.log({a1, a2, a3, a4, a5});

if( regresaFalse() && regresaTrue() && (true || true || true || false)){ // No demos tener mas de 3 condiciones
    console.log('Hacer algo');
}else{
    console.log('Hacer otra cosa');
}



