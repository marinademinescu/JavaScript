function seguiRichiesta() {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    fetch(url)
        .then(risposta => {
            if (!risposta.ok) {
                throw new Error("La risposta non è andata a buon fine!")
            }
            return risposta.json()
        })
        .then(dati => {
            console.log(dati)

        })

        .catch(errore => {
            console.error(errore)
        })
}

seguiRichiesta()