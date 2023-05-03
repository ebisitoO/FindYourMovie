function validar(){
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    if(usuario == "admin" && password == "findyourmovie"){
        window.location.href = "file:///C:/Users/luise/Documents/FYM-new-master/FYMYOSHIO/FYM.html";
    }else{
        alert("Usuario o contraseña incorrectos");
    }
}