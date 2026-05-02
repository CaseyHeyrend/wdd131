// Mission 1: Theme Switcher
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.classList.add('dark');// Dark
        // code for changes to colors and logo
    } else {
        document.body.classList.remove('dark'); // White and bright
        // code for changes to colors and logo
    }
}           
                    