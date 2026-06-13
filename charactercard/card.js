const character = {
    name: "Wolf Warrior",
    class: "Warrior",
    level: 1,
    health: 100,
    image: "images/wolf-warrior.jpg",

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            document.getElementById("message").textContent = 
            `${this.name} has died!`;
        }
        updateCard();
    },

    levelUp() {
        this.level++;
        updateCard();
    }
};

function updateCard() {
    document.querySelector("name").textContent = character.name;
    document.querySelector("class").textContent = character.class;
    document.querySelector("level").textContent = character.level;
    document.querySelector("health").textContent = character.health;
    document.querySelector("image").src = character.image;
}

document.getElementById("attack-but").addEventListener("click", () => {
    character.attacked();
});

document.getElementById("level-but").addEventListener("click", () => {
    character.levelUp();
});

updateCard();