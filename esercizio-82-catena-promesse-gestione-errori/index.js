function promessaErrori() {
    return new Promise((resolve, reject) => {
        const numero = Math.random() > 0.4

        if (numero) {
            resolve(24)
        } else {
            reject("Errore si è verificato un problema!")
        }
    })
}

promessaErrori()
.then((successo) => {
    console.log("Numero casuale trasformato:", successo)
    return successo *2
})

.then((successoMan) => {
    console.log("Numero manipolato:", successoMan)
})

.catch((errore) => {
    console.log(errore)
})