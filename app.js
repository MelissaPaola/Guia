
/* ===== MODO CLARO E ESCURO ===== */

const btnTema = document.getElementById("btnTema");

function atualizarTema(escuro) {
    document.body.classList.toggle("modo-escuro", escuro);

    btnTema.textContent = escuro
        ? "☀️ Modo claro"
        : "🌙 Modo escuro";

    localStorage.setItem("tema-guia", escuro ? "escuro" : "claro");
}

const temaSalvo = localStorage.getItem("tema-guia");

atualizarTema(temaSalvo === "escuro");

btnTema.addEventListener("click", () => {
    const escuro = !document.body.classList.contains("modo-escuro");
    atualizarTema(escuro);
});


/* ===== COPIAR COMANDOS ===== */

const botoesCopiar = document.querySelectorAll(".btn-copiar");
const toast = document.getElementById("toast");

botoesCopiar.forEach(botao => {
    botao.addEventListener("click", async () => {
        const comando = botao.dataset.comando;

        try {
            await navigator.clipboard.writeText(comando);
            mostrarToast("Comando copiado! ✨");
        } catch {
            mostrarToast("Não foi possível copiar. Tente selecionar o comando.");
        }
    });
});


/* ===== NOTIFICAÇÃO ===== */

let toastTimer;

function mostrarToast(mensagem) {
    toast.textContent = mensagem;
    toast.classList.add("mostrar");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("mostrar");
    }, 1800);
}

