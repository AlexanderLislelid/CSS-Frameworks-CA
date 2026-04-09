const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const toRegister = document.getElementById("to-register");
const toLogin = document.getElementById("to-login");

toRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
});

toLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});
