document.getElementById("login-btn").addEventListener("click", function (e) {
  const getEmailField = document.getElementById("email-field");
  const userEmail = getEmailField.value;

  const getPasswordField = document.getElementById("password-field");
  const userPassword = getPasswordField.value;

  if (userEmail === "mizba@gmail.com" && userPassword === "Mizba23") {
    window.location.href = "../bank.html";
  } else {
    Swal.fire({
      icon: "error",
      title: "Wrong credentials",
    });
  }

  e.preventDefault();
});
