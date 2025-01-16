function PromessaBooleana(booleano) {
    return new Promise((resolve, reject) => {
        if (booleano) {
            resolve("Operazione risolta con successo!")
        } else {
            reject("Si è verificato un errore!")
        }
    })
}

PromessaBooleana(true)
    .then((successo) => {
        console.log(successo)
    })

    .catch((errore) => {
        console.log(errore)
    })

PromessaBooleana(false)
    .then((successo) => {
        console.log(successo)
    })

    .catch((errore) => {
        console.log(errore)
    })