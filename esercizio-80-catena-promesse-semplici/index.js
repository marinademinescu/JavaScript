function creaPromessa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(15)
        }, 1000)
    })
}

creaPromessa()
.then((molteplica) => {
    return molteplica * 2
})

.then((aggiungi) => {
    return aggiungi + 3
})

.then ( (somma) => {
    console.log("Risultato finale:", somma)
})