const url = 'https://api.example.com/data'

function erroreCors() {
    fetch(url)
        .then(risposta => {
            if (!risposta.ok) {
                throw new Error("La risposta non puo essere effetuata!")
            }

            return risposta.json()
        })
        .then(dati => {
            console.log("La risposta dei dati:", dati)
        })
        .catch(errore => {
            console.error("Errore:", errore)
        })
}

erroreCors()