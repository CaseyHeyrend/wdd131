const form = document.querySelector("#ticketForm");
const individualType = document.querySelector("#individualType");
const codeContainer = document.querySelector("#codeContainer");
const codeLabel = document.querySelector("#codeLabel");
const code = document.querySelector("#code");
const output = document.querySelector("#output");

function updateCodeField() {
  if (individualType.value === "student") {
    codeContainer.hidden = false;
    codeLabel.textContent = "Student Id";
    code.required = true;
  }
  else if (individualType.value === "guest") {
    codeContainer.hidden = false;
    codeLabel.textContent = "Access Code";
    code.required = true;
  }
  else {
    codeContainer.hidden = true;
    code.required = false;
    code.value = "";
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

  if (type === "student") {
    if (!/^\d{9}$/.test(enteredCode)) {
      output.textContent =
        "Student Id must contain exactly 9 digits.";
      return;
    }
  }

  if (type === "guest") {
    if (enteredCode !== "EVENT131") {
      output.textContent =
        "Access Code must be EVENT131.";
      return;
    }
  }

  output.innerHTML = `
    <h2>Ticket Reserved</h2>
    <p>Name: ${form.firstName.value} ${form.lastName.value}</p>
    <p>Email: ${form.email.value}</p>
    <p>Date: ${date}</p>
    <p>Type: ${type === "one" ? "Student" : "Guest"}</p>
  `;

  form.reset();
  updateCodeField();
});