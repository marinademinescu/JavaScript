const personeJSON = '[{"nome":"Mario","cognome":"Rossi","eta":30,"citta":"Milano","mansione":"pizzaiolo"}, {"nome":"Alice","cognome":"Bianchi","eta":35,"citta":"Roma","mansione":"cuoca"}]'

const persone = JSON.parse(personeJSON)

persone.push({"nome": "Luca", "cognome": "Verdi", "eta":25, "mansione": "libraio" })

const personeAggiornatoJSON = JSON.stringify(persone)

console.log(personeAggiornatoJSON)
