'use strict';

// Crea due array che hanno un numero di elementi diversi.

const array1 = [
    "elemento",
    "elemento",
    "elemento",
    "elemento",
];

console.log(array1, array1.length);

const array2 = [
    "elemento",
    "elemento",
    "elemento",
    "elemento",
    "elemento",
    "elemento",
    "elemento",
    "elemento",
    "elemento",
];

console.log(array2, array2.length);

// DEFINISCO ELEMENTO DA AGGIUNGERE
const elemento = "elemento";

// CONTROLLO SU QUALE DEI DUE ARRAY E PIU LUNGO
if (array1.length<array2.length){
    // CICLO FOR CHE USA LE LUNGHEZZE DEGLI ARRAY PER DEFINIRE QUANTI ELEMENTI AGGIUNGERE
    for (let buffer = array1.length; buffer<array2.length; buffer++){
        array1.push(elemento);
    }
} else if (array2.length<array1.length){
    for (let buffer = array2.length; buffer<array1.length; buffer++){
        array2.push(elemento);
    }
}

console.log(array1, array1.length);
console.log(array2, array2.length);

