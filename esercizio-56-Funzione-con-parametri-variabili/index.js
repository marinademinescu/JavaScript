function somma (...numeri) {
    return numeri.reduce((accumulatore, numero) => accumulatore + numero, 0);

}

console.log(somma(3, 5, 7))
console.log(somma(2, 2))
console.log(somma(5))
console.log(somma())