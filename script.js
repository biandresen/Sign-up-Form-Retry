const pwdInput = document.querySelector('input[id="pwd"]');
const pwdConfirmInput = document.querySelector('input[id="confirmPwd"]');
const btnSubmit = document.querySelector('button[type="submit"]');
const errorMessage = document.querySelector("#errorMessage");
const myForm = document.querySelector("#signUpForm");

btnSubmit.addEventListener("click", () => {
  if (pwdInput.value !== pwdConfirmInput.value) {
    errorMessage.textContent = "Passwords do not match!";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    pwdInput.style.backgroundColor = "red";
    pwdConfirmInput.style.backgroundColor = "red";
    pwdInput.style.borderColor = "red";
    pwdConfirmInput.style.borderColor = "red";
    setTimeout(() => {
      pwdInput.style.backgroundColor = "white";
      pwdConfirmInput.style.backgroundColor = "white";
    }, "3000");
  } else {
    errorMessage.style.display = "block";
    errorMessage.style.color = "green";
    errorMessage.textContent = "SUCCESS!";
    myForm.submit();
  }
});
