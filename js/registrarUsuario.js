var usuarios = [];

function cadastrar() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if(password == confirm_password) {
        if(usuarios == undefined) {
            usuarios = [{ user, password }]
        } else {
            usuarios.push([{ user, password}])
        }
        localStorage.setItem("user", JSON.stringify(user));
        console.log(JSON.stringify(user));
    } else {
        alert("As senhas não são iguais!")
    }

}