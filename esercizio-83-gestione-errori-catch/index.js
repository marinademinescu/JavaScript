function PromessaErrore() {
    return new Promise((resolve, reject) => {
        reject("Messaggio di errore!")
    })
}

PromessaErrore()
    .catch((errore) => {
        console.log(errore)
    })
