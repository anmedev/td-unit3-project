/*
Treehouse Techdegree:
FSJS Project 3 - Interactive Form
*/

// Sets focus method on name text field.
const nameField = document.querySelector("#name");
nameField.focus();
// Selects job role menu.
const jobRoleMenu = document.querySelector("#title");

// Hides the "Other Job Role" text field upon page load.
const jobRoleTextField = document.querySelector("#other-job-role");
jobRoleTextField.style.display = "none";

// Displays the "Other Job Role" text field upon selection.
jobRoleMenu.addEventListener("change", () => {
    jobRoleMenu.value === "other" ? jobRoleTextField.style.display = "block" : jobRoleTextField.style.display = "none";
});

// Hides the T-shirt color menu upon page load.
const ShirtColorMenu = document.querySelector("#shirt-colors");
ShirtColorMenu.hidden = true;

// Selects the T-shirt design menu.
const designMenu = document.querySelector("#design");
// Selects all of the T-shirt color menu options.
const ShirtColorOptions = document.querySelectorAll("option[data-theme]");

// Displays the T-shirt color options associated with the selected T-shirt design.
designMenu.addEventListener("change", () => {
  ShirtColorMenu.hidden = false;
  for (let i = 0; i < ShirtColorOptions.length; i++) {
    if (designMenu.value === ShirtColorOptions[i].dataset.theme) {
      ShirtColorOptions[i].selected = true;
      ShirtColorOptions[i].hidden = false;
    } else if (designMenu.value !== ShirtColorOptions[i].dataset.theme) {
        ShirtColorOptions[i].hidden = true;
    }
  }
});

// Selects the "Register for Activities" section.
const activities = document.querySelector("#activities");
// Selects the "Total: $" p element.
const activitiesError = document.querySelector("#activities-hint");
let totalString = document.querySelector("#activities-cost");
// Creates a cost var and assigns it a value of 0.
let totalCost = 0;

// Updates the total cost on the page depending on the activities selected.
activities.addEventListener("change", (e) => {
  const currentCheckboxes = e.target;
  const activitiesCosts = +currentCheckboxes.dataset.cost;
  currentCheckboxes.checked ? totalCost += activitiesCosts : totalCost -= activitiesCosts;
  const updatedTotal = `<p>Total: $${totalCost}</p>`;
  totalString.innerHTML = updatedTotal;
});

// Selects the Payment Info Menu.
const paymentMenu = document.querySelector("#payment");
// Selects the Credit Card payment option upon page load.
const creditCardMenuOption = paymentMenu[1];
creditCardMenuOption.selected = true;

// Selects the divs associated with each payment type.
const creditCardDiv = document.querySelector("#credit-card");
const payPalDiv = document.querySelector("#paypal");
const bitcoinDiv = document.querySelector("#bitcoin");
// Hides the Paypal and Bitcoin divs upon page load.
payPalDiv.hidden = true;
bitcoinDiv.hidden = true;

// Displays the payment instructions associated with the payment option selected.
paymentMenu.addEventListener("change", (e) => {
  const paymentOption = e.target;
  if (paymentOption.value === "paypal") {
    payPalDiv.hidden = false;
    creditCardDiv.hidden = true;
    bitcoinDiv.hidden = true;
  } else if (paymentOption.value === "bitcoin") {
    bitcoinDiv.hidden = false;
    payPalDiv.hidden = true;
    creditCardDiv.hidden = true;
  } else {
    creditCardDiv.hidden = false;
    payPalDiv.hidden = true;
    bitcoinDiv.hidden = true;
  }
});

// Selects form element.
const form = document.querySelector("form");
// Selects email address field.
const emailAddressField = document.querySelector("#email");
// Selects credit card number field.
const creditCardNumberField = document.querySelector("#cc-num");
// Selects zip code text field.
const zipCodeField = document.querySelector("#zip");
// Selects cvv text field.
const cvvField = document.querySelector("#cvv");

// Creates function to validate name, email address, zip code, and CVV text field inputs.
const isValidCreditCardNum = () => /^\d{13,16}$/.test(creditCardNumberField.value);
const isValidCVV = () => /^\d{3}$/.test(cvvField.value);
const isValidZipCode = () => /^\d{5}$/.test(zipCodeField.value);
const isValidEmail = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailAddressField.value);
const isValidName = () => nameField.value !== "";

// Validates the form selections and inputs when form is submitted.
form.addEventListener("submit", (e) => {
  // Function to validate text field inputs.
  const validator = (elementInput, validation) => {
    if (validation()){
        elementInput.closest('label').className = 'valid';
        elementInput.nextElementSibling.style.display= "none";
      } else {
        e.preventDefault();
        elementInput.closest('label').className= 'not-valid'
        elementInput.nextElementSibling.style.display= 'block';
    }
};

// Validates zip code, CVV, and credit card number text fields only if the credit card payment option is selected.
  if (paymentMenu.value === "credit-card") {
    validator(zipCodeField, isValidZipCode);
    validator(cvvField, isValidCVV);
    validator(creditCardNumberField, isValidCreditCardNum);
  };

// Validates email address and name text fields.
  validator(emailAddressField, isValidEmail);
  validator(nameField, isValidName)

  if (totalString.innerHTML === "Total: $0") {
    e.preventDefault();
    activities.classList.add("not-valid");
    activitiesError.style.display = "block";
  } else {
  activities.classList.add("valid");
  activitiesError.style.display = "none";
  }
});

// Adds focus states to "Register for Activities" section.
const activitiesCheckboxes = document.querySelectorAll("input[type='checkbox']");
for (let i = 0; i < activitiesCheckboxes.length; i++) {
  activitiesCheckboxes[i].addEventListener("focus", () => {
    activitiesCheckboxes[i].parentElement.classList.add("focus");
  });

  activitiesCheckboxes[i].addEventListener("blur", () => {
    activitiesCheckboxes[i].parentElement.classList.remove("focus");
  });
};