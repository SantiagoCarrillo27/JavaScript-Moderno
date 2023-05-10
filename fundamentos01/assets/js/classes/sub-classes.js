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


class Heroe extends Persona {
    nombre;
    codigo;
    clan = 'sin clan';


    constructor( nombre, codigo, frase ){
        super(nombre, codigo, frase); // Siempre llamar justo después del constructor
        this.clan = 'Los Avengers'
    }

    Quiensoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.QuienSoy();
    }
}




const spiderman = new Heroe();

console.log(spiderman);

spiderman.QuienSoy();

