function validar_entrada () {
    lista = [
        caixa_nome = document.getElementById("nome"),
        caixa_email = document.getElementById("email"),
        caixa_telefone = document.getElementById("telefone"),
        caixa_assunto = document.getElementById("assunto"),
        caixa_mensagem = document.getElementById("mensagem"),
    ]

    function testar(caixa){
        if (caixa.value == ""){
            alert("A caixa "+caixa.placeholder+" está vazia")
        
        } else {
            console.log(caixa.value)
        }
    }

   lista.forEach(testar)
}

