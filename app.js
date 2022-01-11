const hamburger = document.getElementById("hamburger")
const navUl = document.getElementById("nav-ul")

hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show");
})

const python = document.getElementById("python")
const list = document.getElementById("list")


python.addEventListener("click", () => {
    list.classList.toggle("show-lists")
    skill.classList.toggle("show-skill")
})

const web = document.getElementById("web")
const list_2 = document.getElementById("list-2")
const skill = document.getElementById("skills")

web.addEventListener("click", () => {
    list_2.classList.toggle("show-lists");
    skill.classList.toggle("show-skill")

})

