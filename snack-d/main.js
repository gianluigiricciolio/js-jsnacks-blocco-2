'use strict';

const myArray = [
    "case",
    "libri",
    "auto",
    "viaggi",
    "fogli",
    "giornale"
]

console.log(rimuoviDallaCoda(myArray));


// FUNZIONE NON CORRETTA MA EZ PZ
function rimuoviDallaCoda2(array){
    array.length--;
    return array;
}


// FUNZIONE CORRETTA
function rimuoviDallaCoda(array){
    let buffer = new Array (array.length-1)
    for (let i = 0; i < buffer.length; i++){
        buffer[i] = array[i];
    }
    return buffer;
}