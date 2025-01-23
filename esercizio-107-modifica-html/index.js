const para = document.querySelector(".para")
const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    para.innerText = "Ciao mondo!!!!!!!"

    para.style.backgroundColor = "pink"
    para.style.fontSize = "40px"

})

