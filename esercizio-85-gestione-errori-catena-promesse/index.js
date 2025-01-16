function catenaPromesse () {
    return new Promise ((resolve, reject) => {
        const valoreCasuale = Math.random()
        if(valoreCasuale < 0.4) {
            resolve("Operazione risolta con successo!")
        }else {
            reject("Errore di operazione!")
        }
    })
}

catenaPromesse()
.then((prima) => {
    console.log(prima)
    return catenaPromesse()
})
.then((seconda) => {
    console.log(seconda)
    return catenaPromesse()
})
.then ((terza) => {
    console.log(terza)
})
.catch((errore)=> {
    console.log(errore)
})

