function numeroCondizione () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(8)
        }, 1000)
    })
}

numeroCondizione()
.then((verifica) => {
    console.log(`Numero originale: ${verifica}`)

    if(verifica % 2 === 0) {
        return verifica + 4
    } else {
        return verifica - 4
    }
})

.then((risFinale) => {
    console.log("Risultato finale:", risFinale)
})