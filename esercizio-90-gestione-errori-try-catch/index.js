function promessa (booleano) {
    return new Promise((result, reject) => {
        if(booleano) {
            result("La promessa è stata risolta!")
        } else {
            reject("Si è verificato un errore!")
        }
    })
}

async function booleanPromessa(esito) {
    try {
        const attende = await promessa(esito)
        console.log(attende)
    }  catch (errore) {
        console.error(errore)
    } 
}

booleanPromessa(true)

booleanPromessa(false)