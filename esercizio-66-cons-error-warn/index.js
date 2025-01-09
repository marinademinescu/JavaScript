const eta = 20

if(eta < 18) {
    console.error("Errore: devi avere almeno 18 anni!" )
} else if ( eta >= 18 && eta <= 21) {
     console.warn("Avviso: Sei appena maggiorene, alcuni servizi non sono disponibili!")
} else {
    console.log("Benvenuto: puoi accedere a tutti i servizi!")
}

