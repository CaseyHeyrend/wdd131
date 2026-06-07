document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"); // Assumes your HTML has a <form> element
    const typeSelect = document.getElementById("type");
    const conditionalDiv = document.getElementById("conditional-field");
    const conditionalLabel = document.getElementById("conditional-label");
    const conditionalInput = document.getElementById("conditional-input");
    const errorContainer = document.getElementById("error-container");
    const ticketContainer = document.getElementById("ticket-container");

    // 1. Handle the dynamic Dropdown selection
    typeSelect.addEventListener("change", () => {
        const selectedValue = typeSelect.value;

        if (selectedValue === "student") {
            // Show div and configure for Student
            conditionalDiv.style.display = "block";
            conditionalLabel.textContent = "Student I#";
            conditionalInput.placeholder = "Enter 9-digit ID";
            conditionalInput.value = ""; 
            conditionalInput.required = true;
        } else if (selectedValue === "guest") {
            // Show div and configure for Guest
            conditionalDiv.style.display = "block";
            conditionalLabel.textContent = "Access Code";
            conditionalInput.placeholder = "Enter event code";
            conditionalInput.value = "";
            conditionalInput.required = true;
        } else {
            // Hide if "Choose one" is selected
            conditionalDiv.style.display = "none";
            conditionalInput.required = false;
        }
    });

    // 2. Handle Form Submission and Validation
    form.addEventListener("submit", (event) => {
        // Prevent default submission to handle validation manually
        event.preventDefault();

        // Clear previous errors and tickets
        errorContainer.innerHTML = "";
        ticketContainer.innerHTML = "";
        let errors = [];

        // Get basic form values
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const dateInput = document.getElementById("event-date").value;
        const userType = typeSelect.value;
        const conditionalValue = conditionalInput.value.trim();

        // --- VALIDATION RULES ---

        // Rule A: Verify date is later than today
        if (dateInput) {
            const selectedDate = new Date(dateInput);
            const today = new Date();
            // Clear time from today's date for an accurate day-to-day comparison
            today.setHours(0, 0, 0, 0);

            if (selectedDate <= today) {
                errors.push("The event date must be later than the current date.");
            }
        } else {
            errors.push("Please select an event date.");
        }

        // Rule B: Type conditional validations
        if (userType === "student") {
            // Regex to check if it's exactly 9 digits
            const idPattern = /^\d{9}$/;
            if (!idPattern.test(conditionalValue)) {
                errors.push("Student I# must be a valid 9-digit number.");
            }
        } else if (userType === "guest") {
            // Exact code validation
            if (conditionalValue !== "EVENT131") {
                errors.push("Invalid Access Code. Guests must use 'EVENT131'.");
            }
        } else {
            errors.push("Please select whether you are a Student or a Guest.");
        }

        // --- OUTPUT PROCESSING ---

        if (errors.length > 0) {
            // Display errors below the form if any exist
            errors.forEach(errorMsg => {
                const p = document.createElement("p");
                p.className = "error-message"; // Add class for CSS styling
                p.textContent = errorMsg;
                errorContainer.appendChild(p);
            });
        } else {
            // Success! Generate and display ticket details
            ticketContainer.innerHTML = `
                <div class="ticket-info">
                    <h3>🎉 Ticket Created Successfully!</h3>
                    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Date:</strong> ${dateInput}</p>
                    <p><strong>Type:</strong> ${userType.charAt(0).toUpperCase() + userType.slice(1)}</p>
                    <p><strong>Verified details:</strong> ${conditionalValue}</p>
                </div>
            `;
            
            // Optional: reset the form on a clean success
            form.reset();
            conditionalDiv.style.display = "none";
        }
    });
});