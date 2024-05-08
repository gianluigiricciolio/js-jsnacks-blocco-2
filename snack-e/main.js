'use strict';

const myArray = [
    "case",
    "libri",
    "auto",
    "viaggi",
    "fogli",
    "giornale"
];

console.log(rimuoviDallaTesta(myArray));


function rimuoviDallaTesta(array){
    const buffer = new Array(array.length-1);

    for (let i=0; i < buffer.length; i++){
        buffer[i]=array[i+1];
    }
    return buffer;
}