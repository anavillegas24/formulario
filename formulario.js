function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var errorNombre = document.getElementById("errorNombre");
    var errorEmail = document.getElementById("errorEmail");
    var errorPassword = document.getElementById("errorPassword");
    var errorConfirmPassword = document.getElementById("errorConfirmPassword");

    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorPassword.textContent = "";
    errorConfirmPassword.textContent = "";

    if (nombre.trim() === "") {
        errorNombre.textContent = "Por favor ingresa tu nombre.";
        return false;
    }

    if (email.trim() === "") {
        errorEmail.textContent = "Por favor ingresa tu correo electrónico.";
        return false;
    }

    if (password.trim() === "") {
        errorPassword.textContent = "Por favor ingresa una contraseña.";
        return false;
    }

    if (confirmPassword.trim() === "") {
        errorConfirmPassword.textContent = "Por favor confirma tu contraseña.";
        return false;
    }

    if (password !== confirmPassword) {
        errorConfirmPassword.textContent = "Las contraseñas no coinciden.";
        return false;
    }

    return true; // El formulario se enviará si todas las validaciones pasan
}