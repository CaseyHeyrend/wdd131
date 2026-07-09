// Sample camping trips
const trips = [
    {
        name: "Yellowstone Adventure",
        destination: "Yellowstone National Park",
        startDate: "July 18, 2026",
        campers: 4,
        type: "Tent"
    },
    {
        name: "Grand Teton Weekend",
        destination: "Grand Teton National Park",
        startDate: "August 8, 2026",
        campers: 2,
        type: "Cabin"
    },
    {
        name: "Bear Lake Getaway",
        destination: "Bear Lake",
        startDate: "September 2, 2026",
        campers: 6,
        type: "RV"
    }
];

// Display trips
function displayTrips(tripList) {

    const container = document.querySelector(".trip-container");

    if (!container) return;

    container.innerHTML = "";

    tripList.forEach((trip, index) => {

        const card = document.createElement("div");
        card.classList.add("trip-card");

        card.innerHTML = `
            <h3>${trip.name}</h3>

            <p><strong>Destination:</strong> ${trip.destination}</p>

            <p><strong>Date:</strong> ${trip.startDate}</p>

            <p><strong>Campers:</strong> ${trip.campers}</p>

            <p><strong>Camping Type:</strong> ${trip.type}</p>

            <button data-index="${index}" class="deleteBtn">
                Delete
            </button>
        `;

        container.appendChild(card);

    });

    addDeleteEvents();

}

// Delete trip
function addDeleteEvents() {

    const buttons = document.querySelectorAll(".deleteBtn");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const index = this.dataset.index;

            trips.splice(index, 1);

            displayTrips(trips);

        });

    });

}

// Search trips
function searchTrips() {

    const search = document.querySelector("#search");

    if (!search) return;

    search.addEventListener("input", function () {

        const text = this.value.toLowerCase();

        const filtered = trips.filter(trip =>

            trip.name.toLowerCase().includes(text) ||

            trip.destination.toLowerCase().includes(text)

        );

        displayTrips(filtered);

    });

}

// Add Trip Form
function addTrip() {

    const form = document.querySelector("#tripForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const trip = {

            name: document.querySelector("#tripName").value,

            destination: document.querySelector("#destination").value,

            startDate: document.querySelector("#startDate").value,

            campers: document.querySelector("#campers").value,

            type: document.querySelector("#campType").value

        };

        trips.push(trip);

        alert("Camping trip added!");

        form.reset();

    });

}

// Dark Mode
function darkMode() {

    const button = document.querySelector("#darkMode");

    if (!button) return;

    button.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

    });

}

// Start
displayTrips(trips);

searchTrips();

addTrip();

darkMode();