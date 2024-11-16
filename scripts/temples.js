const hamButton = document.querySelector('#hamburger');
const navLinks = document.querySelectorAll('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamButton.classList.toggle('open');
});

