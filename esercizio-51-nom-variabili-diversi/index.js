const person = {
    nome: "Marina",
    eta: "34",
    citta: "Mirano"
}

const { nome, eta, citta} = person

const { nome: nuovoNome, eta: nuovaEta, citta: nuovaCitta } = person

console.log(nuovoNome, nuovaEta, nuovaCitta)