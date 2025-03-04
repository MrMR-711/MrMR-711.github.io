        const menuToggle = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        const langOptions = document.querySelectorAll('.lang-option');
        const translatableElements = document.querySelectorAll('.translatable');

        const translations = {
            en: {
                heroTitle: "Chemistry Lab",
                heroSubtitle: "A comprehensive simulation lab for exploring chemical elements, now freely available on GitHub.",
                androidVersion: '<i class="fab fa-android"></i> Android Version',
                webVersion: '<i class="fas fa-globe"></i> Web(PWA) Version',
                keyFeatures: "Key Features",
                exploreCapabilities: "Explore the capabilities that Chemist Lab offers for your research.",
                molecularModeling: "Molecular Modeling",
                molecularModelingDesc: "Visualize and design molecules in 3D. Predict properties and conformations for advanced research.",
                spectroscopyAnalysis: "Spectroscopy Analysis",
                spectroscopyAnalysisDesc: "Analyze data from NMR, IR, MS, and UV-Vis with our comprehensive suite of tools.",
                reactionSimulation: "Reaction Simulation",
                reactionSimulationDesc: "Simulate and understand reaction mechanisms to optimize your experimental processes.",
                compoundDatabase: "Compound Database",
                compoundDatabaseDesc: "Access an integrated database of chemical compounds for efficient data management.",
                testimonialsSection: "Testimonials",
                whatResearchersSay: "See what researchers are saying about Chemist Lab.",
                testimonial1: '"Chemist Lab has become an indispensable tool in our lab. The molecular modeling features are top-notch and incredibly user-friendly."',
                anyaSharmaName: "Dr. Anya Sharma",
                anyaSharmaTitle: "Head of Computational Chemistry, PharmaCorp",
                testimonial2: '"The spectroscopy module is fantastic! It has significantly sped up our data analysis, allowing us to focus more on discovery."',
                benCarterName: "Professor Ben Carter",
                benCarterTitle: "Professor of Analytical Chemistry, University of Science",
                footerDesc: "Open source software for chemical research and discovery.",
                explore: "Explore",
                about: "About",
                careers: "Careers",
                blog: "Blog",
                contactSection: "Contact",
                emailUs: '<i class="fas fa-envelope"></i> Email Us',
                callUs: '<i class="fas fa-phone"></i> Call Us',
                address: '<i class="fas fa-map-marker-alt"></i> Science City, Research Lane 456',
                features: "Features",
                testimonials: "Testimonials",
                contact: "Contact"
            },
            fa: {
                heroTitle: "آزمایشگاه شیمی",
                heroSubtitle: "یک آزمایشگاه شبیه سازی جامع برای کاوش عناصر شیمیایی، اکنون به صورت رایگان در GitHub در دسترس است.",
                androidVersion: '<i class="fab fa-android"></i> نسخه اندروید',
                webVersion: '<i class="fas fa-globe"></i> نسخه وب (PWA)',
                keyFeatures: "ویژگی های کلیدی",
                exploreCapabilities: "قابلیت هایی که آزمایشگاه شیمی برای تحقیقات شما ارائه می دهد را کاوش کنید.",
                molecularModeling: "مدل سازی مولکولی",
                molecularModelingDesc: "مولکول ها را به صورت سه بعدی تجسم و طراحی کنید. خواص و ساختارهای مولکولی را برای تحقیقات پیشرفته پیش بینی کنید.",
                spectroscopyAnalysis: "تجزیه و تحلیل طیف سنجی",
                spectroscopyAnalysisDesc: "داده ها را از NMR، IR، MS و UV-Vis با مجموعه ابزارهای جامع ما تجزیه و تحلیل کنید.",
                reactionSimulation: "شبیه سازی واکنش",
                reactionSimulationDesc: "مکانیسم های واکنش را شبیه سازی و درک کنید تا فرآیندهای تجربی خود را بهینه کنید.",
                compoundDatabase: "پایگاه داده ترکیبات",
                compoundDatabaseDesc: "به یک پایگاه داده یکپارچه از ترکیبات شیمیایی برای مدیریت کارآمد داده ها دسترسی پیدا کنید.",
                testimonialsSection: "نظرات مشتریان",
                whatResearchersSay: "ببینید محققان در مورد آزمایشگاه شیمی چه می گویند.",
                testimonial1: '"آزمایشگاه شیمی به یک ابزار ضروری در آزمایشگاه ما تبدیل شده است. ویژگی های مدل سازی مولکولی درجه یک و فوق العاده کاربر پسند هستند."',
                anyaSharmaName: "دکتر آنیا شارما",
                anyaSharmaTitle: "رئیس شیمی محاسباتی، PharmaCorp",
                testimonial2: '"ماژول طیف سنجی فوق العاده است! این به طور قابل توجهی تجزیه و تحلیل داده های ما را تسریع کرده و به ما امکان می دهد بیشتر بر کشف تمرکز کنیم."',
                benCarterName: "پروفسور بن کارتر",
                benCarterTitle: "استاد شیمی تجزیه، دانشگاه علوم",
                footerDesc: "نرم افزار متن باز برای تحقیقات و اکتشافات شیمیایی.",
                explore: "کاوش",
                about: "درباره ما",
                careers: "فرصت های شغلی",
                blog: "وبلاگ",
                contactSection: "تماس",
                emailUs: '<i class="fas fa-envelope"></i> ایمیل به ما',
                callUs: '<i class="fas fa-phone"></i> تماس با ما',
                address: '<i class="fas fa-map-marker-alt"></i> شهرک علمی، خیابان تحقیقات ۴۵۶',
                features: "ویژگی‌ها",
                testimonials: "نظرات",
                contact: "تماس"
            }
        };

        function translatePage(lang) {
            translatableElements.forEach(element => {
                const key = element.dataset.key;
                if (translations[lang] && translations[lang][key]) {
                    element.innerHTML = translations[lang][key];
                } else if (translations['en'][key]) { // fallback to English if translation missing
                    element.innerHTML = translations['en'][key];
                }
            });
             // Set HTML lang attribute for Persian - Keeping this for semantic HTML
            document.documentElement.lang = lang;
            // Removing direction change - per user request
            // if (lang === 'fa') {
            //     document.body.style.direction = 'rtl'; // Set direction to right-to-left for Persian
            // } else {
            //     document.body.style.direction = 'ltr'; // Set direction to left-to-right for other languages
            // }
        }

        function setInitialLanguage() {
            const savedLanguage = localStorage.getItem('selectedLanguage');
            let initialLang = savedLanguage || 'en'; // Default to English if no saved language

            langOptions.forEach(option => option.classList.remove('active'));
            document.getElementById(`${initialLang}-lang`).classList.add('active');
            translatePage(initialLang);
        }

        setInitialLanguage(); // Set language on page load


        langOptions.forEach(option => {
            option.addEventListener('click', function() {
                langOptions.forEach(opt => opt.classList.remove('active')); // Remove active class from all options
                this.classList.add('active'); // Add active class to the clicked option

                const lang = this.dataset.lang;
                localStorage.setItem('selectedLanguage', lang); // Store selected language
                translatePage(lang);
            });
        });


        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        document.addEventListener('click', (event) => {
            const isClickInsideMenu = navLinks.contains(event.target);
            const isClickOnMenuButton = menuToggle.contains(event.target);
            const isMenuActive = navLinks.classList.contains('active');

            if (isMenuActive && !isClickInsideMenu && !isClickOnMenuButton) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active'); // Also remove active class from mobile-menu on resize
            }
        });

        const buttondownload = document.getElementById('button-download');
        const title = document.getElementById('title');

        buttondownload.addEventListener('mouseenter', () => {
            title.style.fontVariationSettings = "'DSTY' 1";
        });

        buttondownload.addEventListener('mouseout', () => {
            title.style.fontVariationSettings = "'DSTY' 0";
        });