const character = {
    name: "Shadowswift",
    class: "Warrior",
    level: 1,
    health: 100,
    image: "images/Shadowswift.jpg",
    alt: "A wolf warrior",

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
    document.getElementById("name").textContent = character.name;
    document.getElementById("class").textContent = character.class;
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
    document.getElementById("character-image").src = character.image;
    document.getElementById("character-image").alt = character.alt;
}

document.getElementById("attack-but").addEventListener("click", () => {
    character.attacked();
});

document.getElementById("level-but").addEventListener("click", () => {
    character.levelUp();
});

updateCard();