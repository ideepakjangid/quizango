const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const registerBtn = document.getElementById("register");
const signinBtn = document.getElementById("signin");
const authContainer = document.getElementById("auth-container");
const errorMessage = document.getElementById("error-message");
const signinError = document.getElementById("signin-error");
const password = document.getElementById("register-password");
const confirmPassword = document.getElementById("confirm-password");

registerBtn.addEventListener("click", () => {
  authContainer.classList.add("active");
});

signinBtn.addEventListener("click", () => {
  authContainer.classList.remove("active");
});

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if (!name || !email || !passwordValue || !confirmPasswordValue) {
    errorMessage.textContent = "Please fill in all fields";
  } else if (passwordValue !== confirmPasswordValue) {
    errorMessage.textContent = "Passwords do not match";
  } else {
    errorMessage.textContent = "";

    registerForm.reset();
    location.reload();
  }
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  if (!loginEmail || !loginPassword) {
    signinError.textContent = "Please enter both email and password";
  } else {
    signinError.textContent = "";

    loginForm.reset();
    location.reload();
  }
});

const alreadyAccountLogin = document.getElementById("already-account-login");
const alreadyAccountRegister = document.getElementById(
  "already-account-register"
);
const container = document.querySelector(".container");

alreadyAccountLogin.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default link behavior
  container.innerHTML = document.querySelector(".login").innerHTML;
});

alreadyAccountRegister.addEventListener("click", function (e) {
    console.log(e.target)
  e.preventDefault(); // Prevent default link behavior
  container.innerHTML = document.querySelector(".registerform").innerHTML;
});
