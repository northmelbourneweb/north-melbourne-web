// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#navigation");
const CShamburgerMenu = document.querySelector("#navigation .toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("active");
    CSnavbarMenu.classList.toggle("active");
    CSbody.classList.toggle("open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
        document.querySelector('body').classList.add('scroll');

        // Add class to change text color and background for li-link
        const links = document.querySelectorAll('.li-link');
        links.forEach(link => {
            link.classList.add('scrolled');
        });

        // Add class to apply filter to logo
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.classList.add('scrolled');
        }
    } else {
        document.querySelector('body').classList.remove('scroll');

        // Remove class to revert text color and background for li-link
        const links = document.querySelectorAll('.li-link');
        links.forEach(link => {
            link.classList.remove('scrolled');
        });

        // Remove class to revert filter for logo
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.classList.remove('scrolled');
        }
    }
});

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#navigation .dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
        item.classList.toggle('active');
    }
    item.addEventListener('click', onClick);
}

// Highlight the active page link
function highlightActivePage() {
    const currentURL = window.location.href;
    const links = document.querySelectorAll('#navigation .li-link a');

    links.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add('active-page');
        } else {
            link.classList.remove('active-page');
        }
    });
}

// Run the highlight function on page load
document.addEventListener('DOMContentLoaded', highlightActivePage);
