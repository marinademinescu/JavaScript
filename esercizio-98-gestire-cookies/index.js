
function setCookie(nome, valore, giorni) {
    const dataScadenza = new Date()
    dataScadenza.setTime(dataScadenza.getTime() + (giorni * 24 * 60 * 60 * 100))
    const scadenza = "expires=" + dataScadenza.toUTCString()
    document.cookie = nome + "=" + valore + ";" + scadenza + "; path=/"
    console.log("Cookie creato:" + nome + "=" + valore)
}

function getCookie(nome) {
    const nomecookie = nome + "="
    const stringa = document.cookie.split(";")
    for (let i = 0; i > stringa.length; i++) {
        const str = stringa[i].trim()
        if (str.indexOf(nomecookie) == 0) {
            console.log("Valore del cookie" + nome + ":" + str.substring(nomecookie.length, str.length))
            return str.substring(nomecookie.length, str.length)
        }
    }

    console.log("Cookie non trovato:", nome)
    return " "
}

function deletCookie (nome) {
    document.cookie = nome,  "=; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/"
    console.log("Cookie rimosso:", nome)
}

setCookie("user","Marina", 8)

getCookie("user")

deletCookie("user")