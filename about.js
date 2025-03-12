window.addEventListener("load", function () {
    let images = [];
    
    document.querySelectorAll("*").forEach(el => {
        let bgImage = window.getComputedStyle(el).backgroundImage;
        if (bgImage && bgImage.startsWith("url(")) {
            let url = bgImage.replace(/url\(["']?(.*?)["']?\)/, '$1');
            images.push(url);
        }
    });

    images.forEach(src => {
        let img = new Image();
        img.src = src;
    });
});

document.querySelectorAll(".nav-item-home, .nav-item-about, .foot-item-telegram, .foot-item-email").forEach(icon => {
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

document.querySelectorAll('.nav-item-home, .nav-item-about, .foot-item-telegram, .foot-item-email').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('active');

        setTimeout(() => {
            btn.classList.remove('active');
        }, 500);
    });
});

const searchButton = document.getElementById("search-button");
const searchBox = document.getElementById("search-box");
const searchInput = document.querySelector(".search-input");
const resultsList = document.getElementById("results-list");

let isSearchBoxVisible = false;

searchButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (isSearchBoxVisible) {
        searchBox.classList.remove("visible");
        searchInput.value = "";
        resultsList.innerHTML = "";
        searchButton.classList.remove("active");
    } else {
        searchBox.classList.add("visible");
        searchInput.focus();
        searchButton.classList.add("active");
    }
    isSearchBoxVisible = !isSearchBoxVisible;
});

function closeSearchBox() {
    searchBox.classList.remove("visible");
    searchInput.value = "";
    resultsList.innerHTML = "";
    searchButton.classList.remove("active");
}

document.addEventListener("click", (event) => {
    if (
        !searchBox.contains(event.target) &&
        !searchButton.contains(event.target)
    ) {
        closeSearchBox();
        isSearchBoxVisible = false;
    }
});

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    if (query) {
        const results = searchInData(query);
        displayResults(results);
    } else {
        resultsList.innerHTML = "";
    }
});

function searchInData(query) {
    const projects = document.querySelectorAll(".projects .project");
    const results = [];

    projects.forEach(project => {
        const title = project.querySelector("h3").textContent.trim();
        const imgSrc = project.querySelector("img").src;
        if (title.toLowerCase().includes(query.toLowerCase())) {
            results.push({
                title: title,
                link: project.closest("a").href,
                image: imgSrc
            });
        }
    });

    return results;
}

function displayResults(results) {
    resultsList.innerHTML = "";
    if (results.length > 0) {
        results.forEach(result => {
            const li = document.createElement("li");
            li.innerHTML = `
                    <a href="${result.link}">
                        <img src="${result.image}" alt="${result.title}" style="width: 80px; height: 50px; margin-right: 10px; border-radius: 5px;">
                        <h3 style="margin-top: -45px; margin-left: 90px;">${result.title}</h3>
                    </a>`;
            resultsList.appendChild(li);
        });
    } else {
        const noResultsMessage = document.createElement("li");
        noResultsMessage.textContent = "No results found.";
        noResultsMessage.style.color = "#cf0000";
        noResultsMessage.style.textAlign = "right";
        resultsList.appendChild(noResultsMessage);
    }
}

const languageButton = document.getElementById("language-button");
const languageBox = document.getElementById("language-box");
let islanguageBoxVisible = false;

languageButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (islanguageBoxVisible) {
        languageBox.classList.remove("visible");
        languageButton.classList.remove("active");
    } else {
        languageBox.classList.add("visible");
        languageButton.classList.add("active");
    }
    islanguageBoxVisible = !islanguageBoxVisible;
});

document.addEventListener("click", (event) => {
    if (!languageBox.contains(event.target) && !languageButton.contains(event.target)) {
        languageBox.classList.remove("visible");
        languageButton.classList.remove("active");
        islanguageBoxVisible = false;
    }
});

document.querySelectorAll('#language-box a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = this.classList.contains('language-persian') ? 'fa' : 'en';

        localStorage.setItem('language', lang);

        if (lang === 'en') {
            window.location.href = './about';
        } else {
            window.location.href = './Fa/about';
        }
    });
});

const backToTopButton = document.getElementById("backToTop");

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