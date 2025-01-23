const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const cognome = document.querySelector("#cg").value
    const nome = document.querySelector("#nm").value

    if(cognome === "" || nome === ""){
        alert("Per favore, compila entrambi i campi (Nome e Cognome).")
    } else {
        alert("Form inviato con successo!")
        form.submit
    }
})