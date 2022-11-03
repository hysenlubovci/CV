const sections = document.querySelectorAll('section');
const nav = document.querySelector('nav');
const hamburgeri = document.getElementById('hamburgeri')



let isToggled = false;
const toggleNav = function () {
    if (!isToggled) {
        nav.style.display = 'block';
        isToggled = true;
    }
}
const untoggleNav = function () {
    if (isToggled) {
        nav.style.display = 'none'
        isToggled = false;
    }
}



hamburgeri.addEventListener('click', toggleNav);
for (let i=0; i<sections.length;i++){
    sections[i].addEventListener('click', untoggleNav);
}