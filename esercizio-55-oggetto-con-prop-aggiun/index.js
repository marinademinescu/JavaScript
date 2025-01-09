const persona = {
    nome: "Leonardo",
    citta: "Venezia",
}

const copiaPersona = {
    ...persona,
    mansione: "Architetto"
}

console.log("Oggetto originale:", persona)
console.log("Oggetto copia:", copiaPersona)