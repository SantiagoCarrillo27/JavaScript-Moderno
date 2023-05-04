
//Funcion tradicional con if y else

// function elMayor2(a,b){ //paso tradicional
//     if( a > b ){
    //         console.log(a);
    //     }else{
        //         console.log(b);
        //     }
        // }
        
        // console.log(elMayor2(1,5));
        
        // Función Flecha y operador ternario

        const elMayor = (a,b) =>  (a > b) ? a : b; //Paso optimizado
        
        const membresia = (miembro) => miembro ? '2 Dólares' : '5 Dolares';
        
        console.log(membresia(false));


        console.log(elMayor(40,20));
        

        const amigo = true;
        const amigosArr = [
            'Peter',
            'Tony',
            'Dr. Strange',
            amigo ? 'Thor' : 'Loki',
            elMayor(1,4)
        ];

        console.log(amigosArr);


        const nota = 65;

        const grado = nota >= 95 ? 'A+':
                      nota >= 90 ? 'A' : 
                      nota >= 85 ? 'B+':
                      nota >= 80 ? 'B' : 
                      nota >= 75 ? 'C' : 'F';

        console.log({nota,grado});
