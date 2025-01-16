function creaPromessa() {
    return new Promise((resolve, reject) => {

        const numeroCasuale = Math.random()

        if (numeroCasuale > 0.6) {
            resolve("Promessa risolta!")
        } else {
            reject("Errore: la promessa è stata rifiutata!")
        }
    })

    .finally(() =>{
        console.log("Operazione completata")
    })
}

creaPromessa().then((resolve) => {
    console.log(resolve)
})
.catch((reject) => {
    console.log(reject)
})

