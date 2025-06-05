const username = document.getElementById("name");
const email = document.getElementById("email");
const comment = document.getElementById("comment");
const message = document.getElementById("message");

function setErrorMessage(msg) {
  message.classList = "";
  message.classList.add("error");
  message.innerText = msg;
}
function setSuccessMessage(msg) {
  message.classList = "";
  message.classList.add("success");
  message.innerText = msg;
}

function setInputInvalid(input, message) {
  input.setCustomValidity(message);
  input.reportValidity();
  setErrorMessage(message);
}

function setInputValid(input) {
  input.setCustomValidity("");
  input.reportValidity();
}

function emailRegex(email) {
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}

function validateForms() {
  //username
  if (username.value.length < 2) {
    setInputInvalid(username, "Username too small");
  } else if (username.value.length > 10) {
    setInputInvalid(username, "Username too big");
  }

  //email
  else if (!emailRegex(email.value)) {
    setInputInvalid(email, "Invalid emai");
  }

  // all good
  else {
    setInputValid(username);
    setInputValid(email);
    setInputValid(comment);

    setSuccessMessage("All is Good");
  }
}

document.addEventListener("keydown", function (e) {
  validateForms();
});
