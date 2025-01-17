function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Prima promessa risolta")
        }, 2000)
    })
}

function promise2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Seconda promessa risolta!")
        }, 1000)
    })
}

Promise.race([promise1(), promise2()])
    .then((result) => {
        console.log("Prima promessa risolta:", result)
    })
    .catch((errore) => {
        console.log("Errore!", errore)
    })