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

function promise3() {
    return new Promise((reject) => {
        setTimeout(() => {
            reject("Si è verificato un errore!")
        }, 3000)
    })
}

Promise.allSettled([promise1(), promise2(), promise3()])
    .then ( (results) => {
        results.forEach((item, index) => {
            console.log(item)
        })
    })