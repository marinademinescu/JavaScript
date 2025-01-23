const ul = document.createElement("ul")

const items = ["Elemento1", "Elemento2", "Elemento3"]

items.forEach(item => {
    const li = document.createElement("li")
    li.innerText = item
    ul.appendChild(li)
})

document.body.appendChild(ul)