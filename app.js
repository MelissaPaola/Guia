// ===== BOTÃO "COPIAR" EM CADA CARD =====

const botoesCopiar = document.querySelectorAll(".btn-copiar")
const toast = document.getElementById("toast")

botoesCopiar.forEach(botao => {
    botao.addEventListener("click", () => {
        const comando = botao.dataset.comando

        navigator.clipboard.writeText(comando)
            .then(mostrarToast)
            .catch(() => {
                // fallback caso o navegador bloqueie a Clipboard API
                alert("Não foi possível copiar automaticamente. Comando: " + comando)
            })
    })
})

function mostrarToast() {
    toast.classList.add("mostrar")

    // esconde depois de 1.5s
    clearTimeout(mostrarToast.timer)

    mostrarToast.timer = setTimeout(() => {
        toast.classList.remove("mostrar")
    }, 1500)
}


// ===== BOTÃO MODO ESCURO =====

const btnTema = document.getElementById("btnTema")

btnTema.addEventListener("click", () => {

    document.body.classList.toggle("modo-escuro")

    if (document.body.classList.contains("modo-escuro")) {
        btnTema.textContent = "☀️ Modo claro"
    } else {
        btnTema.textContent = "🌙 Modo escuro"
    }

})
