const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 30,
    citta: "Milano",
    mansione: "pizzaiolo"
}

function descriviPersona(persona) {
    return `Ciao, mi chiamo ${persona.nome} ${persona.cognome}, ho ${persona.eta} anni e vivo a ${persona.citta},  faccio il ${persona.mansione}`
}

const risultato = descriviPersona(persona)
console.log(risultato)
