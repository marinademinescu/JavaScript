const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 30,
    citta: "Milano",
    mansione: "pizzaiolo",

}

const {nome, cognome, ...restoPersona} = persona

console.log(nome)
console.log(cognome)
console.log(restoPersona)