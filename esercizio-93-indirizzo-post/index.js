function richiestaPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    const dati = {
        title: 'foo',
        body: 'bar',
        userId: 1
    }

    fetch(url, {
        method: "Post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dati)
    })

        .then(datiJson => {
            console.log("Dati ricevuti:", datiJson)
        })
        .catch(errore => {
            console.error("Si è verificato un errore:", errore)
        })
}
 richiestaPost()
