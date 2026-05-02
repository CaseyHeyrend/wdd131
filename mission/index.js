// Mission 1: Theme Switcher
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.classList.add('dark');
        //https://wddbyui.github.io/wdd131/images/byui-logo-white.png
        logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png');
        //logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png';
    } else {
        // code for changes to colors and logo
        document.body.classList.remove('dark'); // White and bright
        logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp');
        //logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp';
        
    }
}           
                    