'use strict';

const myArray = [
    "case",
    "libri",
    "auto",
    "viaggi",
    "fogli",
    "giornale"
]

stampaElenco(myArray);

let myElem2 = "libri";
const myElem=prompt('Inserisci elemento di cui si vuole un indice').toLowerCase();

console.log(trovaIndice(myArray,myElem2));


// FUNZIONI
function trovaIndice(array, elemento){
    for (let index=0; index<array.length; index++){
        if(array[index]===elemento) return index;
    }
    return -1;
}

function stampaElenco(array){
    for(let i = 0; i<array.length; i++){
        console.log(array[i]);
    }
}

