const themeSwitch = document.querySelector('.navbar__block-theme-btn-switch');
const root = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
    themeSwitch.checked = localStorage.getItem('switcher')
    setDarkTheme();
}

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        setDarkTheme();
        localStorage.setItem('theme', 'dark');
    } else {
        setLightTheme();
        localStorage.setItem('theme', 'light');
    }
    localStorage.setItem('switcher', themeSwitch.checked);
});

function setDarkTheme() {
    root.style.setProperty('--color-light', '#343a40');
    root.style.setProperty('--color-text-area', '#61686f');
    root.style.setProperty('--border-text-area', '1px solid black');
    root.style.setProperty('--color-bg','#343a40' );
    root.style.setProperty('--color-coral', '#4800d5');
    root.style.setProperty('--color-coral-theme', '#5400fa');
    root.style.setProperty('--color-theme-editor', '#5400fa');
    root.style.setProperty('--color-theme-active', '#4e00e8');
}

function setLightTheme() {
    root.style.setProperty('--color-light', '#ddefff');
    root.style.setProperty('--color-text-area', 'white');
    root.style.setProperty('--border-text-area', '1px solid #BEBEBE');
    root.style.setProperty('--color-bg','#e0faff' );
    root.style.setProperty('--color-coral', '#ff6f65');
    root.style.setProperty('--color-coral-theme', '#ff6055');
    root.style.setProperty('--color-theme-editor', '#9dd5ff');
    root.style.setProperty('--color-theme-active', '#7cc5fb');
}