const person = {
    eta: 40,
    mansione: "webdeveloper",
}

const { nome = "Nicolas", eta, mansione} = person;
console.log(nome);
console.log(eta)
console.log(mansione)