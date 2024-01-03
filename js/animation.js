let welcomGreetingBox = document.getElementById("welcome-greeting-box");
let startBtn = document.getElementById("start-btn");
let loginBox = document.getElementById("login-box");
let registerBox = document.getElementById("register-box");
let registerBtn = document.getElementById("login-register");
let backToLoginBtn = document.getElementById("backto-login-btn");
let doneRegisterBtn = document.getElementById("register-btn");
let registerForm = document.getElementById("register-form");

function clickStartBtn(event) {
  event.preventDefault();
  welcomGreetingBox.remove();
  startBtn.remove();
  loginBox.style.display = "flex";
}

function clickRegisterBtn(event) {
  loginBox.style.display = "none";
  registerBox.style.display = "flex";
}

function clickBackToLoginBtn(event) {
  registerBox.style.display = "none";
  loginBox.style.display = "flex";
}

function clickDoneRegisterBtn(event) {
  registerBox.style.display = "none";
  loginBox.style.display = "flex";
}

startBtn.addEventListener("click", clickStartBtn);
registerBtn.addEventListener("click", clickRegisterBtn);
backToLoginBtn.addEventListener("click", clickBackToLoginBtn);
doneRegisterBtn.addEventListener("click", clickDoneRegisterBtn);
