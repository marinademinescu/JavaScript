const url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url)
.then(risposta => {
    if(!risposta.ok){
        throw new Error("Si è verificato un errore nella ricerca!")
    }

    return risposta.json()

})

.then(dati =>{
    console.log(dati)
})
.catch(errore => {
    console.error("Errore:", errore)
})

