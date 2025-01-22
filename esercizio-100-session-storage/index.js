const key = "nome"
const value = "Marina"

const sessionStorageManager = {
    save: (key, value) => {
        sessionStorage.setItem(key, value)
        console.log("Valore salvato:", value)
    },

    retrieve: (key) => {
        const retrieve = sessionStorage.getItem(key)
        if(retrieve) {
            console.log("Valore recuperato:", retrieve )
        } else {
            console.log("Nessun valore trovato per la chiave:", key)
        }
    },

    remove: (key) => {
        sessionStorage.removeItem(key)
        console.log("Valore rimosso:", key)
    }
}

sessionStorageManager.save(key, value)
sessionStorageManager.retrieve(key)
sessionStorageManager.remove(key)
