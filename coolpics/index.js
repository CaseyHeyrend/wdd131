const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');


menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName === 'IMG') {
        modalImage.src = e.target.src;
        modal.showModal();
    }
}

// Event listener for the close button
closeButton.addEventListener('click', () => {
    modal.close();
});
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});