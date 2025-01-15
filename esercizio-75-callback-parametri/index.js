function somma (a,b, callback) {
    const risultato = a + b

    console.log(risultato)

    callback(risultato)
}

function myCallback (risultato) {
    console.log("Funzione di callback eseguita:", risultato)
}

somma(5, 7, myCallback)