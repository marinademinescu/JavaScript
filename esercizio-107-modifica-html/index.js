const para = document.querySelector(".para")
const btn = document.createElement('button')
btn.innerHTML = 'Cambia testo!';

btn.addEventListener("click", () => {
    para.innerText = "Ciao mondo!!!!!!!"

    para.style.backgroundColor = "pink"
    para.style.fontSize = "40px"

})

para.appendChild(btn)
