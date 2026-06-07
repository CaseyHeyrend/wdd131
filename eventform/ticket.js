const form = document.querySelector("#ticketForm");
const individualType = document.querySelector("#individualType");
const codeContainer = document.querySelector("#codeContainer");
const codeLabel = document.querySelector("#codeLabel");
const code = document.querySelector("#code");
const output = document.querySelector("#output");

function updateCodeField() {
  if (individualType.value === "one") {
    codeContainer.hidden = false;
    codeLabel.textContent = "Student I#";
    code.placeholder = "Enter 9-digit Student I#";
  } else if (individualType.value === "two") {
    codeContainer.hidden = false;
    codeLabel.textContent = "Access Code";
    code.placeholder = "Enter Access Code";
  } else {
    codeContainer.hidden = true;
    code.value = "";
    code.required = false;
    codeLabel.textContent = "";
  }
     
}

individualType.addEventListener("change", updateCodeField);
updateCodeField();

function isPastDate(dateString) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selected = new Date(dateString);

  return selected <= today;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  output.textContent = "";

  const type = individualType.value;
  const date = form.availableDate.value;
  const enteredCode = code.value.trim();

  if (isPastDate(date)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  if (type === "one") {
    if (!/^\d{9}$/.test(enteredCode)) {
      output.textContent =
        "Student I# must contain exactly 9 digits.";
      return;
    }
  }

  if (type === "two") {
    if (enteredCode !== "EVENT131") {
      output.textContent =
        "Access Code must be EVENT131.";
      return;
    }
  }

  output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${form.firstName.value} ${form.lastName.value}</p>
    <p>${type === "one" ? "Student" : "Guest"}</p>
    <p>${date}</p>
  `;

  form.reset();
  updateCodeField();
});