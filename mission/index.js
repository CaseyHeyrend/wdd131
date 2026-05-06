// Mission 1: Theme Switcher
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

function changeTheme() {
        let current = selectElem.value;
        if (current == 'dark') {
                // code for changes to colors and logo
                document.body.classList.add('dark');
                logo.setAttribute('src', 'images/byui-logo-white.png');
            } else {
                // code for changes to colors and logo
                document.body.classList.remove('dark'); // White and bright
                logo.setAttribute('src', 'images/byui-logo-blue.webp');

            }
        }
selectElem.addEventListener('change', changeTheme);