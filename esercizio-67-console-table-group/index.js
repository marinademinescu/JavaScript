const persone = [
    { nome: "Mario", eta: 30, citta: "Roma" },
    { nome: "Luigi", eta: 28, citta: "Milano" },
    { nome: "Chiara", eta: 45, citta: "Venezia" }
]

console.table(persone)

console.group("Dettagli delle persone")

persone.forEach(persona => {
    console.log(`Nome: ${persona.nome}, Età: ${persona.eta}, Città: ${persona.citta}`)
})