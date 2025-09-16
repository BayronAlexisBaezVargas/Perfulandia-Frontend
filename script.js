document.getElementById("email") = Email;

document.getElementById("pass") = Contra;

function Validacion(){
    let Email = document.getElementById("email").value;
    let Contra = document.getElementById("pass").value;
    let mensajeE = document.getElementById("login-mensaje");

    mensajeE.classList.add("d-none");

    if(email === "" || Contra === ""){
        mensajeE.textContent = "Porfavor rellene todos los campos.";
        mensajeE.classList.remove("d-none");
        return;
    }
   
    if (Email === "marcelo.c@duoc.cl" && Contra==="olatens"){
        window.location.href="admin.html"
    } else {
        mensajeE.textContent = "Email o Contraseña Incorrectos";
        mensajeE.classList.remove("d-none");
    }


}