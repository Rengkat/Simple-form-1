const form = document.forms[0];
const firstName = form.firstName;
const surName = form.surname;
const email = form.Email;
const password = form.Password;
const error = document.getElementsByClassName("fa-exclamation-circle");
const success = document.getElementsByClassName("fa-check-circle");
let errorMessage = document.getElementsByClassName("error");

//conditions for submition
let [f, s, e, p] = [0, 0, 0, 0];

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (firstName.value == "" || firstName.value == null) {
    firstName.className = "errorClass";
    errorMessage[0].style.visibility = "visible";
    errorMessage[0].innerText = "First name can't be blank";
    // setTimeout (() =>errorMessage[0].remove(), 3000);
    f = 0;
  } else {
    firstName.className = "successClass";
    errorMessage[0].style.visibility = "hidden";
    errorMessage[0].innerText = "hidden";
    f = 1;
  }
  //Surname validation
  if (surName.value == "" || surName.value == null) {
    surName.className = "errorClass";
    errorMessage[1].style.visibility = "visible";
    errorMessage[1].innerText = "Surname can't be blank";
    // setTimeout (() => errorMessage[1].remove(), 3000);
    s = 0;
  } else {
    surName.className = "successClass";
    errorMessage[1].style.visibility = "hidden";
    errorMessage[1].innerText = "hidden";
    s = 1;
  }
  //email validation
  if (email.value == "" || email.value == null) {
    email.className = "errorClass";
    errorMessage[2].style.visibility = "visible";
    errorMessage[2].innerText = "Email can't be blank";
    // setTimeout (() => errorMessage[2] .remove(), 3000);
    e = 0;
  } else if (
    email.value.indexOf("@") < 3 ||
    email.value.lastIndexOf(".") >= email.value.legth - 2
  ) {
    email.className = "errorClass";
    errorMessage[2].style.visibility = "visible";
    errorMessage[2].innerText = "Enter a valid email";
    // setTimeout (() =>errorMessage[2].remove(), 3000);
    e = 0;
  } else {
    email.className = "successClass";
    errorMessage[2].style.visibility = "hidden";
    errorMessage[2].innerText = "hidden";
    e = 1;
  }

  // for password
  if (password.value == "" || password.value == null) {
  	password.className = "errorClass";
    errorMessage[3].style.visibility = "visible";
    errorMessage[3].innerText = "Enter password";
    // setTimeout (() =>errorMessage[3].remove(), 3000);
    p = 0;
  } else if(password.value.length < 6) {
  	password.className = "errorClass";
    errorMessage[3].style.visibility = "visible";
    errorMessage[3].innerText = "Password should be more than six characters";
    // setTimeout (() => errorMessage[3].remove(), 3000);
    p = 0;
  } else{
  	password.className = "successClass";
    errorMessage[3].style.visibility = "hidden";
    errorMessage[3].innerText = "hidden";
    p = 1;
  }

  if (f == 0 && s == 0 && e == 0 && p == 0) {
  	return false;
  } else {
  	return true;
  }
}
