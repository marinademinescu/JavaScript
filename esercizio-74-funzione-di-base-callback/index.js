function somma (a,b, callback) {
    const risultato = a + b

    console.log(risultato)

    callback()
}

function myCallback () {
    console.log("Funzione di callback eseguita")
}

somma(2, 3, myCallback)

