'use strict';

const array = [
    "elemento",
    "elemento",
    "elemento",
    "elemento",
    "elemento",
]


function contaElementi(array){
    return array.length;
}

function contaElementi2(array){
    let counter = 0;
    for (let i of array){
        counter++;
    }
    return counter;
}

console.log(contaElementi(array));
console.log(contaElementi2(array));


