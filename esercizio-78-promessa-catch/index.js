function creaPromessa () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        
            const numeroCasuale = Math.random()

            if(numeroCasuale > 0.6) {
                resolve("Promessa risolta!")
            } else {
                reject("Errore: la promessa è stat rifiutata!")
            }
        }, 2000)
    })
}

creaPromessa().then((resolve) => {
    console.log(resolve)
})
.catch((reject) => {
    console.log(reject)
})