function promessa1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promessa 1 risolta dopo 3 secondi!")
        }, 3000)
    })
}

function promessa2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promessa 2 risolta dopo 2 secondi!")
        }, 2000)
    })
}

Promise.all([promessa1(), promessa2()])
.then((resultato) => {
    console.log("tutte le promesse sono state risolte!")
    console.log(resultato)
})

.catch((errore)=> {
    console.log("Si è verificato un errore!", errore)
})