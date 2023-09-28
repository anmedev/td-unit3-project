// Set focus to name text field
const nameField = document.querySelector("#name").focus();
// Selects job role menu
const jobRoleMenu = document.querySelector("#title");

// Hides other job role text field upon page load
const jobRoleTextField = document.querySelector("#other-job-role");
jobRoleTextField.style.display = "none";

// Displays 'Other Job Role' text field upon selection
jobRoleMenu.addEventListener("change", () => {
    jobRoleMenu.value === "other" ? jobRoleTextField.style.display = "block" : jobRoleTextField.style.display = "none";
});

// Hides T-shirt color menu upon page load
const ShirtColorMenu = document.querySelector("#shirt-colors");
ShirtColorMenu.hidden = true;

// Selects T-shirt design menu
const designMenu = document.querySelector("#design");

// Selects all T-shirt color menu options
const ShirtColorOptions = document.querySelectorAll("option[data-theme]");

// Displays T-shirt color options associated with the selected T-shirt design
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