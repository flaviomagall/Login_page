let users = [{
    usuario: "teste"
}]



function logar(){

    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById("senha").value;

    if(usuario == "teste" && senha == "teste"){
        alert("sucesso");
        location.href = "home.html"
    }else{
        alert("Usuário não cadastrato")
    }
}