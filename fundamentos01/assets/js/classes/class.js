

class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias'
    }

    static mensaje(){
        console.log(this.nombre); // Undefined
        console.log('Hola a todos, soy un método stático');
    }

    // 'use strict' No hace falta colocarlo ya que viene por defecto

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {


        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;


        Persona._conteo++;

    }


    set setcomidaFavorita(comida) { // Usualmente solo recibe un parametro

        this.comida = comida.toUpperCase();

    }

    get getcomidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    QuienSoy() { //Siempre inicializamos los metodos o funciones con la primera letra en mayusculas
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    MiFrase() {
        this.QuienSoy();
        console.log(`Mi frase es ${this.frase}`);
    }
}


const spiderman = new Persona('Peter parker', 'SpiderMan', 'Soy tu amigable vecino el hombre araña');
const ironman = new Persona('Tony Stark', 'IronMan', 'Yo soy IronMan');

// console.log(ironman);

spiderman.MiFrase();
// ironman.MiFrase();

spiderman.setcomidaFavorita = 'El pie de cereza de la tia May'
// spiderman.comida = 'Duende Verde';

// console.log(spiderman.getcomidaFavorita);
// console.log(spiderman);


console.log('Conteo statico', Persona._conteo );
console.log( Persona.conteo );

Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);

console.log(Persona);


