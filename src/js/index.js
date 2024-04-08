const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener("click", () => {
    mostrarMaisProjetos();
    removerBotaoMostrarMais();
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function removerBotaoMostrarMais() {
    botaoMostrarProjetos.classList.add("remover");
}
