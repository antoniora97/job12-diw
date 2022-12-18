
const btn_section = document.querySelectorAll(".btn-section")
btn_section.forEach((e) => {
    e.addEventListener("click", () => {
        console.log(e)
    })
})