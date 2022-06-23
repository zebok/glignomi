function validateName() {

    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {

      producePrompt('Inserte el nombre', 'name-error' , 'red')
      return false;

  }

  producePrompt('Lindo nombre', 'name-error', 'green');
  return true;

}

function validateEmail () {

var email = document.getElementById('contact-email').value;

if(email.length == 0) {

  producePrompt('Ingrese el email','email-error', 'red');
  return false;

}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

  producePrompt('Ingrese un email correcto', 'email-error', 'red');
  return false;

}

producePrompt('Nos contactaremos contigo!', 'email-error', 'green');
return true;

}

function validateMessage() {
var message = document.getElementById('contact-message').value;
var required = 30;
var left = required - message.length;

if (left > 0) {
  producePrompt('El mensaje es muy corto!      '  + left, 'message-error','red');
  return false;
}

producePrompt('Gracias por esas palabras!', 'message-error', 'green');
return true;

}

function validateForm() {
if (!validateName() || !validateEmail() || !validateMessage()) {
  jsShow('submit-error');
  producePrompt('Por favor complete los campos de texto adecuadamente.', 'submit-error', 'red');
  setTimeout(function(){jsHide('submit-error');}, 2000);
  return false;
}
else {

}
}

function jsShow(id) {
document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

document.getElementById(promptLocation).innerHTML = message;
document.getElementById(promptLocation).style.color = color;
}