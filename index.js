window.onload = function () {

        const btn = document.querySelector("button")
    btn.addEventListener("click", () => {
            
        const caixa = document.getElementById("caixa")
        let blue = Math.floor(Math.random()*256)
        let red = Math.floor(Math.random()*256)
        let green = Math.floor(Math.random()*256)
        caixa.style.backgroundColor = `rgb(${red},${green},${blue})`
        const span = document.getElementById("span")
        span.textContent = `rgb(${red},${green},${blue})`
    })
}