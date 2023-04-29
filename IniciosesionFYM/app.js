const correo = document.getElementById("name")
const contraseña = document.getElementById("name")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=> {

    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\ .\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.nodeValue.lenght <6){
    warnings += 'El email no existe <br>'
    entrar = true
    }
 
    if (!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>'
        entrar = true

    }
    if(Pass.value.lenght <8){

        warnings += 'La contraseña no es valida <br>'
        entrar = true

    }
    if (entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
  }  )