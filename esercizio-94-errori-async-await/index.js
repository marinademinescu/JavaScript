async function gestioneErrori() {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    try {
        const risposta = await fetch(url)

        if (!risposta.ok) {
            throw new Error("Errore nella risposta", risposta.status)
        }

        const dati = await risposta.json()

        console.log("Dati ricevuti:", dati)
    } catch (errore) {
        console.log("Si è verificato un errore", errore.message)

    }

}

gestioneErrori()

