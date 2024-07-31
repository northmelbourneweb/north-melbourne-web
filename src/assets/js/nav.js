// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
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

        // Add class to change text color and background for cs-li-link
        const links = document.querySelectorAll('.cs-li-link');
        links.forEach(link => {
            link.classList.add('scrolled');
        });

        // Add class to apply filter to cs-logo
        const logo = document.querySelector('.cs-logo');
        if (logo) {
            logo.classList.add('scrolled');
        }
    } else {
        document.querySelector('body').classList.remove('scroll');

        // Remove class to revert text color and background for cs-li-link
        const links = document.querySelectorAll('.cs-li-link');
        links.forEach(link => {
            link.classList.remove('scrolled');
        });

        // Remove class to revert filter for cs-logo
        const logo = document.querySelector('.cs-logo');
        if (logo) {
            logo.classList.remove('scrolled');
        }
    }
});

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
        item.classList.toggle('cs-active');
    }
    item.addEventListener('click', onClick);
}

// Highlight the active page link
function highlightActivePage() {
    const currentURL = window.location.href;
    const links = document.querySelectorAll('#cs-navigation .cs-li-link a');

    links.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add('cs-active-page');
        } else {
            link.classList.remove('cs-active-page');
        }
    });
}

// Run the highlight function on page load
document.addEventListener('DOMContentLoaded', highlightActivePage);
