document.addEventListener('DOMContentLoaded', function () {
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

const backToTopButton = document.getElementById("backToTop");

backToTopButton.style.display = "none";

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });

    backToTopButton.classList.add("no-hover");

    setTimeout(() => {
        backToTopButton.classList.remove("no-hover");
    }, 300);
});

document.querySelectorAll(".download-btn, .web-btn, .footer-links a, .contributor-links a").forEach(icon => {
    icon.addEventListener("click", event => {
        event.preventDefault();
        const targetLink = icon.getAttribute("href");

        setTimeout(() => {
            if (targetLink) {
                window.location.href = targetLink;
            }
        }, 700);
    });
});

document.querySelectorAll('.download-btn, .web-btn, .footer-links a, .contributor-links a').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('active');

        setTimeout(() => {
            btn.classList.remove('active');
        }, 500);
    });
});

document.getElementById('language-selector').addEventListener('change', function () {
    var selectedValue = this.value;
    localStorage.setItem('language', selectedValue);
    if (selectedValue === 'en') {
        window.location.href = '../';
    } else if (selectedValue === 'fa') {
        window.location.href = './';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var savedLang = localStorage.getItem('language');
    if (savedLang === 'en') {
        window.location.href = '../';
    }
});