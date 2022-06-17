var user = loadUser();

function logUserIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    for (let index = 0; index < user.length; index++) {
        if(user[index].email == email) {
            if(user[index].password == password) {
                alert("Login efetuado com sucesso!");
                document.location = "./userPortal.html"
                return;
            }
            else {
                alert("Senha incorreta!");
                return;
            }
        }
        else {
            alert("Usuário incorreto!");
            return;
        }
        
    }
    alert("Usuário não encontrado.")
}

function loadUser() {
    return JSON.parse(localStorage.getItem("user"));
}

