// Packing lists
const tentItems = [
   "Tent",
   "Tent Stakes",
   "Sleeping Bag",
   "Sleeping Pad",
   "Pillow",
   "Lantern",
   "Flashlight",
   "Camp Chairs",
   "Cooler",
   "Food",
   "Water",
   "Cooking Stove",
   "Cooking Utensils",
   "First Aid Kit",
   "Bug Spray",
   "Sunscreen",
   "Rain Jacket",
   "Hiking Boots",
   "Map",
   "Matches"
];

const rvItems = [
   "RV Keys",
   "Water Hose",
   "Power Cord",
   "Leveling Blocks",
   "Food",
   "Water",
   "Cooking Supplies",
   "Camping Chairs",
   "First Aid Kit",
   "Flashlight",
   "Bug Spray",
   "Toiletries",
   "Extra Clothes"
];

const cabinItems = [
   "Food",
   "Drinks",
   "Blankets",
   "Pillow",
   "Toiletries",
   "Extra Clothes",
   "Games",
   "Flashlight",
   "Phone Charger",
   "First Aid Kit"
];

// Select elements
export function setupPackingList() {
   const campingType = document.querySelector("#campType");
   const packingList = document.querySelector("#packingList");
   const packingSection = document.querySelector("#packingSection");

   if (!campingType || !packingList || !packingSection) return;
      // Display checklist
      function displayPackingList(items) {

            packingList.innerHTML = "";

            items.forEach(item => {

               const label = document.createElement("label");

               const checkbox = document.createElement("input");
               checkbox.type = "checkbox";
               checkbox.value = item;

               label.appendChild(checkbox);
               label.append(` ${item}`);

               packingList.appendChild(label);

         });

      }


      // Change list when camping type changes
      campingType.addEventListener("change", function () {

         if (campingType.value === "Tent") {

               packingSection.style.display = "block";
               displayPackingList(tentItems);

            } else if (campingType.value === "RV") {

               packingSection.style.display = "block";
               displayPackingList(rvItems);

            } else if (campingType.value === "Cabin") {

               packingSection.style.display = "block";
               displayPackingList(cabinItems);

            } else {

               packingSection.style.display = "none";
               packingList.innerHTML = "";

            }

      });
   }