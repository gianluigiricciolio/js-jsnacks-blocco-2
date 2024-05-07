'use strict';

// Crea due array che hanno un numero di elementi diversi.

const array1 = [
    "elemento",
    "elemento",
    "elemento",
    "elemento",
];
const array2 = [
    "elemento",
    "elemento",
    "elemento",
    "elemento",
    "elemento",
    "elemento",
    "elemento",
];

const elemento = "elemento";

if (array1.length<array2.length){
    
    for (let buffer = array1.length; buffer<array2.length; buffer++){
        array1.push(elemento);
    }
} else if (array2.length<array1.length){
    for (let buffer = array2.length; buffer<array1.length; buffer++){
        array2.push(elemento);
    }
}

console.log(array1);
console.log(array2);

// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.