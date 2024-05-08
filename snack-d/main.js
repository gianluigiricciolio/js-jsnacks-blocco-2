'use strict';

const myArray = [
    "case",
    "libri",
    "auto",
    "viaggi",
    "fogli",
    "giornale"
]


function rimuoviDallaCoda(array){
    array.length--;
    return array;
}

console.log(rimuoviDallaCoda(myArray));