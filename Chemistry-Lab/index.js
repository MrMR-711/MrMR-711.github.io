document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu-btn'); // Updated selector using ID
    const navLinks = document.getElementById('nav-links-menu'); // Updated selector using ID

    if (!menuToggle || !navLinks) {
        console.error("Mobile menu button or nav links menu not found!");
        return;
    }

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active'); // Keep toggling active class for CSS styles (opacity, visibility, transform)

        if (navLinks.classList.contains('active')) {
            // Open the menu (shutter slide down)
            navLinks.style.maxHeight = navLinks.scrollHeight + "px"; // Animate to content height using JS
        } else {
            // Close the menu (shutter slide up)
            navLinks.style.maxHeight = null; // Animate back to 0 (CSS default) using JS
        }
    });

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnMenuButton = menuToggle.contains(event.target);
        const isMenuActive = navLinks.classList.contains('active');

        if (isMenuActive && !isClickInsideMenu && !isClickOnMenuButton) {
            navLinks.classList.remove('active'); // Remove active class for CSS styles
            menuToggle.classList.remove('active'); // Also remove active class from mobile-menu

            // Close the menu with shutter animation (important to mirror the button click close)
            navLinks.style.maxHeight = null; // Animate back to 0 (CSS default) using JS
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active'); // Remove active class for CSS styles
            menuToggle.classList.remove('active'); // Also remove active class from mobile-menu

            // Close the menu with shutter animation (important to mirror button/click-outside close)
            navLinks.style.maxHeight = null; // Animate back to 0 (CSS default) using JS
        }
    });
});

const buttondownload = document.getElementById('button-download');
const title = document.getElementById('title');

buttondownload.addEventListener('mouseenter', () => {
    title.style.fontVariationSettings = "'DSTY' 1";
});

buttondownload.addEventListener('mouseleave', () => {
    title.style.fontVariationSettings = "'DSTY' 2";
});