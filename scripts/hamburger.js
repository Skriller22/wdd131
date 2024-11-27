// Code to add functionality to the hamburger menu.
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    if (hamburger.classList.contains('open')) {
        hamburger.innerHTML = '';
    } else {
        hamburger.innerHTML = '';
    }
});