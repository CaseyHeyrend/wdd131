// Sample camping trips
const trips = [
    {
        name: "Yellowstone Adventure",
        destination: "Yellowstone National Park",
        imgSrc: "images/yellowstone.jpg", // Photo by James Lee
        imgAlt: "Image of Yellowstone National Park",
        description: "Yellowstone National Park is a vast wilderness area in the U.S. states of Wyoming, Montana, and Idaho. It is known for its wildlife and geothermal features, especially Old Faithful geyser.",
        availability: "Open year-round, but some areas may be inaccessible during winter months.",
        type: ["Tent", "RV", "Cabin"]
    },
    {
        name: "Teton Valley Getaway",
        destination: "Teton Valley",
        imgSrc: "images/tetons.jpg", // Photo by Wal Saravia
        imgAlt: "Image of Teton Valley",
        description: "Teton Valley is a picturesque region in western Wyoming, known for its stunning mountain views, outdoor recreation opportunities, and charming small towns.",
        availability: "Open year-round, with peak tourist season in summer.",
        type: ["Tent", "RV", "Cabin"]
    },
    {
        name: "Uinta Mountains Retreat",
        destination: "Uinta Mountains",
        imgSrc: "images/elizabeth_ridge-CaseyHeyrend.jpg", // Photo by Casey Heyrend
        imgAlt: "Image of Uinta Mountains",
        description: "The Uinta Mountains are a range of mountains in northeastern Utah, known for their alpine lakes, hiking trails, and diverse wildlife.",
        availability: "Open year-round, with peak tourist season in summer.",
        type: ["Tent", "RV", "Cabin"]
    },
    {
        name: "Bear Lake Getaway",
        destination: "Bear Lake",
        imgSrc: "images/", // 
        imgAlt: "Image of Bear Lake",
        description: "Bear Lake is a natural freshwater lake located on the Utah-Idaho border, known for its turquoise-blue water, sandy beaches, and recreational activities such as boating, fishing, and swimming.",
        availability: "Open year-round, with peak tourist season in summer.",
        type: ["Tent", "RV", "Cabin"]
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
            <img src="${trip.imgSrc}" alt="${trip.imgAlt}" class="trip-image">
            <h3>${trip.name}</h3>

            <p><strong>Destination:</strong> ${trip.destination}</p>

            <p><strong>Description:</strong> ${trip.description}</p>

            <p><strong>Availability:</strong> ${trip.availability}</p>

            <p><strong>Camping Type:</strong> ${trip.type}</p>

            <button class="deleteBtn" data-index="${index}">Delete</button>
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