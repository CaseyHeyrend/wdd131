import { locations } from "./tripsModel.js";
import { setupPackingList } from "./form.js";

setupPackingList();

const trips = [];
trips.push(
    {
        name: "Summer Adventure",
        ...locations.yellowstone,
        startDate: "2026-08-11",
        campers: 3,
        type: "Tent"
    },
    {
        name: "Family Weekend",
        ...locations.bearLake,
        startDate: "2026-07-01",
        campers: 4,
        type: "RV"
    },
    {
        name: "Mountain Escape",
        ...locations.uintaMountains,
        startDate: "2026-07-18",
        campers: 5,
        type: "Cabin"
    }
);

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

            <p><strong>Start Date:</strong> ${trip.startDate || "N/A"}</p>

            <p><strong>Campers:</strong> ${trip.campers}</p>

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
// Add Trip button event listener
const modal = document.querySelector("#tripModal");

const open = document.querySelector("#addTripButton");

const close = document.querySelector("#closeModal");

if(open){

    open.addEventListener("click",()=>{

        modal.style.display="flex";

});

}

if(close){

    close.addEventListener("click",()=>{

        modal.style.display="none";

});

}

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});


// Add Trip Form
function addTrip() {

        const form = document.querySelector("#tripForm");

        if (!form) return;

            form.addEventListener("submit", function (event) {

                event.preventDefault();

                const locationKey = document.querySelector("#destination").value;
                const location = locations[locationKey];

                const trip = {
                    name: document.querySelector("#tripName").value,

                    destination: location.destination,
                    imgSrc: location.imgSrc,
                    imgAlt: location.imgAlt,
                    description: location.description,
                    availability: location.availability,

                    startDate: document.querySelector("#startDate").value,
                    campers: document.querySelector("#campers").value,
                    type: document.querySelector("#campType").value
                };

                trips.push(trip);

                displayTrips(trips);
                // Show confirmation message
                const message = document.querySelector("#tripMessage");
                if (message) {
                        message.hidden = false;

                        setTimeout(() => {
                            message.hidden = true;
                        }, 3000);
                    }

                    form.reset();

                    if (modal) {
                            modal.style.display = "none";
                        }

                });

            }

            // Dark Mode
            function darkMode() {

                    const button = document.querySelector("#darkMode");

                    if (!button) return;

                        button.addEventListener("click", () => {

                            document.body.classList.toggle("dark-mode");

                            if (document.body.classList.contains("dark-mode")) {

                                    button.textContent = "☀️";

                                } else {

                                    button.textContent = "🌙";

                                }

                        });

                    }

                    // Start
                    displayTrips(trips);

                    searchTrips();

                    addTrip();

                    darkMode();