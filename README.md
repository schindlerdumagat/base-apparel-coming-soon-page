# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

This project lets you create a simple form with one email input. This allows you to apply your knowledge on retrieving data from a form and validating it. This is a basic project to help you grasps the basics of form handling.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

Default State:
![](./default.png)

Error State:
![](./error.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-base-apparel-page-with-custom-email-validation-VfziTHhM8T](https://www.frontendmentor.io/solutions/responsive-base-apparel-page-with-custom-email-validation-VfziTHhM8T)
- Live Site URL: [https://schindlerdumagat.github.io/base-apparel-coming-soon-page/](https://schindlerdumagat.github.io/base-apparel-coming-soon-page/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript
- [BEM](https://getbem.com/) - Block, Element, Modifier

### What I learned

I learned the basics of form handling and validation and show an appropriate error message after placing and invalid input.

```html
<form class="form" novalidate>
  <div class="form__input-container">
    <input class="form__email-input" type="email" name="email" aria-describedby="email-error" placeholder="Email Address" autocomplete="email" required>
    <button class="form__submit"><img class="form__submit-img" src="images/icon-arrow.svg" alt=""></button>
    <img class="form__error-icon" src="images/icon-error.svg" alt="" aria-hidden="true">
  </div>
  <span id="email-error" class="form__email-error" aria-live="polite"></span>
</form>
```

```js
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
```

### Continued development

I will continue to learn and practice handling and validating forms as this is essential for frontend developers.

### Useful resources

- [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) - This gave me some ways on how to validate forms.

## Author

- Website - [Schindler Dumagat](https://schindlerdumagat.github.io/webportfolio/)
- Frontend Mentor - [@schindlerdumagat](https://www.frontendmentor.io/profile/schindlerdumagat)
- LinkedIn - [@schindler-dumagat-015238230](https://www.linkedin.com/in/schindler-dumagat-015238230/)
