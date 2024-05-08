'use strict';

const myArray = [
    "case",
    "libri",
    "auto",
    "viaggi",
    "fogli",
    "giornale"
];

stampaElenco(myArray);

const myElem = prompt('Fornire elemento da inserire in prima posizione')

console.log(inserisciInTesta(myArray, myElem));


function inserisciInTesta(array, elem){
    const buffer = new Array(array.length+1);
    buffer[0]=elem;
    for (let i=1; i < buffer.length; i++){
        buffer[i]=array[i-1];
    }
    return buffer;
}

function stampaElenco(array){
    for(let i = 0; i<array.length; i++){
        console.log(array[i]);
    }
}