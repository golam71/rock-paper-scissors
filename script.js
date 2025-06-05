const username = document.getElementById("name");
const email = document.getElementById("email");
const comment = document.getElementById("comment");
const message = document.getElementById("message");

function setErrorMessage(msg) {
  message.classList.add("error");
  message.innerText = msg;
}

if (username.value.length > 10) {
}
