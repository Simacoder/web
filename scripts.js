var emailField = document.getElementById('email-field');
var emailError = document.getElementById('email-error');


function validateEmail(){

    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Please provide a valid email";
        return false;

    }

    emailError.innerHTML = "";
    return true;
}

