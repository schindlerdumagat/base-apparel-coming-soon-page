const emailInput = document.querySelector(".form__email-input");
const emailForm = document.querySelector(".form");
const emailError = document.querySelector("#email-error");
const emailErrorIcon = document.querySelector(".form__error-icon");

emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!isEmailValid()) {
        return;
    }

    emailInput.classList.remove("form__email-input--error");
    emailErrorIcon.classList.remove("form__error-icon--visible");
    emailInput.value = "";
    emailError.textContent = "";

})

emailInput.addEventListener('input', (e) => {
  
    if (!isEmailValid()) {
        return;
    }

    emailInput.classList.remove("form__email-input--error");
    emailErrorIcon.classList.remove("form__error-icon--visible");
    emailError.textContent = "";

})

// Checks if the email provided is valid
function isEmailValid() {

    let isValid = true;
    let errorMessage = "";

    if (!emailInput.validity.valid) {
        
        if (emailInput.validity.valueMissing) {
            errorMessage = "Email is required";
        } else if (emailInput.validity.typeMismatch) {
            errorMessage = "Please provide a valid email";
        }

        isValid = false;

        emailError.textContent = errorMessage;
        emailInput.classList.add("form__email-input--error");
        emailErrorIcon.classList.add("form__error-icon--visible");
    }

    return isValid;

}