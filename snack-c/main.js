'use strict';

const myArray = [
    "case",
    "libri",
    "auto",
    "viaggi",
    "fogli",
    "giornale"
]


function stampa(array){
    let elementiConcatenati = "";
    for(let i = 0; i<array.length; i++){
        elementiConcatenati+=array[i]+=", ";
    }
    return elementiConcatenati;
}

console.log(stampa(myArray));