const mesnsagemListaVazia = document.querySelector(".mensagem-lista-vazia")

function verificarListaVazia(listaDeCompras) {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mesnsagemListaVazia.style.display = "block"
    } else{
        mesnsagemListaVazia.style.display = "none"
    }
}

export default verificarListaVazia;