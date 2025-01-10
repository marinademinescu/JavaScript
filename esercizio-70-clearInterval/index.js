function messaggio () {
    console.log("Messaggio da stampare")
}

 const  interval = setInterval(messaggio, 1000)

function stopMessaggio () {
    clearInterval(interval)
}

setTimeout(stopMessaggio, 5000)