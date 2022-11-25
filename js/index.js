const nombre = document.getElementById("txtName");
const email = document.getElementById("txtEmail");
const pasword = document.getElementById("txtpwd");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault() 
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es válido <br>` 
        entrar = true
    } 
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`
        entrar = true
    }
    if(pasword.value.length < 8){
        warnings += `La contraseña no es válida <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        window.location.href ="presentacion.html"
    }
})
