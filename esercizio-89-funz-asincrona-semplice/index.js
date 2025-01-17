function attendiMessaggio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La promessa è stata risolta dopo 2 secondi!")
        }, 2000)
    })
}

async function stampaMessaggio() {
    console.log("Attendi il messaggio...")

    const messaggio = await attendiMessaggio()
    console.log(messaggio)

}

stampaMessaggio()