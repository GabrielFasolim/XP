var user = loadUser();

function logUserIn() {
    var nome_login = document.getElementById("nome_login").value;
    var senha = document.getElementById("senha").value;

    for (let index = 0; index < user.length; index++) {
        if(user[index].nome_login == nome_login) {
            if(user[index].senha == senha) {
                alert("Login efetuado com sucesso!");
                document.location = "./register.html"

                return;
            }
        }
        
    }
    alert("Usuário não encontrado.")
}

function loadUser() {
    return JSON.parse(localStorage.getItem("user"));
}

