const urlApi =  'https://jsonplaceholder.typicode.com/posts'

const urlProxy = 'https://cors-anywhere.herokuapp.com/'

const apiProxy = urlApi + urlProxy

function fareRichiesta () {
    fetch (apiProxy)
    .then(risposta => {
        if(!risposta.ok) {
            throw new Error("Si è verificato un errore nella risposta!")
        }

        return risposta.json()
    })
    .then(dati =>{
        console.log("Risposta dei dati:", dati)
    })
    .catch(errore => {
        console.error("Si è verificato un errore durante la ricerca!", errore)
    })
}

fareRichiesta()