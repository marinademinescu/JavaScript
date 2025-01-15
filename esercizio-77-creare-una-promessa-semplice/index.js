function creaPromessa () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Promessa risolta dopo 2 secondi!")
        }, 2000)
    })
}

creaPromessa().then((resolve) => {
    console.log(resolve)
})