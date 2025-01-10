function dividere(a, b) {
    try{
        if(b === 0) {
            throw "Non puoi dividere per zero!"
        }
        const risultato = a / b
        console.log("Risultato della divisione:", risultato)
    } catch(error) {
        console.error("Errore:", error)
    }
    
}

dividere(12, 0)
dividere(12, 6)
dividere(45, 5)
dividere(90, 0)