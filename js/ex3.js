var form = document.getElementById("signup-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;

  var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("email-error");
  var passwordError = document.getElementById("password-error");
  var successMsg = document.getElementById("success-msg");

nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMsg.textContent = "";

  var isValid = true;

  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

if (email === "" || email.indexOf("@") === -1 || email.indexOf(".", email.indexOf("@")) === -1) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = "Form submitted successfully! (This is a demo, nothing was sent anywhere.)";
    form.reset();
  }
});
