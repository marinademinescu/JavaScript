function primaFunzione (callback) {
   console.log("prima operazione eseguita!")
   callback()
}

function secondaFunzione ()  {
    console.log("seconda operazione eseguita!")
}

primaFunzione(secondaFunzione)
