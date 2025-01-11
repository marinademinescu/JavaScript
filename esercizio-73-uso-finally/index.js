function operazioniSuStringa (str) {
    try{
        if (typeof str !== 'string') {
            throw new TypeError("La variabile non è una stringa ")
        }

        const maisc = str.toUpperCase()
        console.log("Stringa in maiuscolo:", maisc)

    
    } catch (error){
        if(error instanceof TypeError) {
            console.error("Errore di tipo:", error.message)
         } else if (error instanceof ReferenceError) { 
            console.error("Errore di riferimento:", error.message)
        
        } else {
            console.error("Errore sconosciuto:", error.message )
        }
    } finally {
        console.log("Operazione terminata!")
    }
}

operazioniSuStringa(456)

operazioniSuStringa("ciao,mondo!")