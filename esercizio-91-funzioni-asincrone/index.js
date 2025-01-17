async function primaFunzione() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Prima funzione risolta dopo 3 secondi")
        }, 3000)
    })

}

async function secondaFunzione() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Seconda funzione risolta dopo 2 secondi")
        }, 2000)
    })

}

async function chiamaFunzioni() {
    console.log("Chiamata delle funzioni in corso...")

    const prima = await primaFunzione()
    console.log(prima)

    const seconda = await secondaFunzione()
    console.log(seconda)

}

chiamaFunzioni()


