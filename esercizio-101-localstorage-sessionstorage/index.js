const keyLocal = "nome"
const valueLocal = "Marina"

const keySession = "Nome"
const valueSession = "Leo"

const storageManager = {
    saveLocal: (key, value) => {
        localStorage.setItem(key, value)
        console.log("Valore salvato nel localStorage:", value)
    },

    saveSession: (key, value) => {
        sessionStorage.setItem(key, value)
        console.log("Valore salvato nel sessionStorage:", value)
    },

    retrieveLocal: (key) => {
        const locale = localStorage.getItem(key)
        if (locale) {
            console.log("Valore locale recuperato:", locale)
        } else {
            console.log("Nessun valore trovato nel locale:", key)
        }
    },

    retrieveSession: (key) => {
        const session = sessionStorage.getItem(key)
        if (session) {
            console.log("Valore recuperato dal sessionStorage:", session)
        } else {
            console.log("Nessun valore nella session da recuperare:", key)
        }
    },

    removeLocal: (key) => {
        localStorage.removeItem(key)
        console.log("Valore rimosso dal localStorage:", key)
    },

    removeSession: (key) => {
        sessionStorage.removeItem(key)
        console.log("valore rimosso dal sessionStorage:", key)
    }

}

storageManager.saveLocal(keyLocal, valueLocal)
storageManager.saveSession(keySession, valueSession)

storageManager.retrieveLocal(keyLocal)
storageManager.retrieveSession(keySession)

storageManager.removeLocal(keyLocal)
storageManager.removeSession(keySession)