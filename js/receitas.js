function subir_pag(){
    window.scroll(0, 0);
}

function descer_pag(){
    heightPage = document.body.scrollHeight;
    window.scroll(0, heightPage);
}

function pesquisar(){
    alimento = document.getElementById("alimentos").value;
    refeicao = document.getElementById("refeicoes").value;

    if (alimento == ""){
        alert("Barra de pesquisa vazia.")
    } else if (refeicao == "Selecione a refeição"){
        alert("Selecione a refeição.")
    } else{
        console.log(alimento);
        console.log(refeicao);
    }

}

function apagar_tag(){
    el = event.target || event.srcElement;
}