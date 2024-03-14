document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('visible');
    });
});

// for menu icons 

const hamburger = document.querySelector('.menu-icon');
const phoneNav = document.querySelector('.phone-nav');

hamburger.addEventListener("click", function(){
    phoneNav.style.left = 0;
});

const cancel = document.querySelector('.cancel-menu');

cancel.addEventListener("click", function(){
    phoneNav.style.left = -100 + "%";
});

// fixing navBar


// Select the navbar element
const navbar = document.getElementById('fixNav-bar');

// Function to add/remove 'sticky' class based on scroll position
function handleScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

// Add scroll event listener to window
window.addEventListener('scroll', handleScroll);
