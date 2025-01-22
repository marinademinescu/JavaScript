const key = "nome"
const value = "Marina"

const localStorageManager = {
    save: (key, value) => {
        localStorage.setItem(key, value)
        console.log("Valore salvato")
    }, 
    retrieve: (key) => {
        localStorage.getItem(key)
        console.log("Valore recuperato")
    }, 
    remove : (key) => {
        localStorage.removeItem(key)
        console.log("Valore rimosso")
    }

}

localStorageManager.save(key, value)
localStorageManager.retrieve(key)
localStorageManager.remove(key)