
document.getElementById("searchForm").addEventListener("submit", function(e){
    const budget = document.getElementById("budget").value;
    const ville = document.getElementById("ville").value;
    const type = document.getElementById("type").value;
    if(!budget || !ville || !type){
        alert("Veuillez remplir tous les champs !");
        e.preventDefault();
    }
});

// Témoignages
let index = 0;
const testimonials = document.querySelectorAll(".testimonial");
function showTestimonial(i){
    testimonials.forEach(t => t.style.display = "none");
    testimonials[i].style.display = "block";
}
showTestimonial(index);
setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
}, 2000);

 // MENU BURGER AVEC GESTION OPTIMISÉE
        const toggle = document.querySelector(".menu-toggle");
        const nav = document.querySelector("nav");
        const overlay = document.querySelector(".nav-overlay");
        const darkModeToggle = document.getElementById("darkModeToggle");
        const darkModeToggleMobile = document.getElementById("darkModeToggleMobile");
        const logo = document.getElementById("siteLogo");

        // Fonction pour gérer l'affichage du dark mode mobile
        function handleDarkModeMobile() {
            const darkModeMobile = document.querySelector('.dark-mode-mobile');
            if (window.innerWidth <= 1053) {
                // Mode téléphone - afficher le dark mode mobile
                darkModeMobile.style.display = 'block';
            } else {
                // Mode desktop - cacher le dark mode mobile
                darkModeMobile.style.display = 'none';
            }
        }

        // Ouvrir/fermer le menu
        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            nav.classList.toggle("active");
            overlay.classList.toggle("active");
            document.body.style.overflow = nav.classList.contains("active") ? "hidden" : "";
        });

        // Fermer le menu en cliquant sur l'overlay
        overlay.addEventListener("click", () => {
            nav.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "";
        });

        // Fermer le menu en cliquant sur un lien
        document.querySelectorAll("nav a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                overlay.classList.remove("active");
                document.body.style.overflow = "";
            });
        });

        // Gestion du Dark Mode
        function toggleDarkMode() {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            
            // Mettre à jour les icônes
            const iconClass = isDark ? "fa-sun" : "fa-moon";
            const text = isDark ? "Clair" : "Sombre";
            
            darkModeToggle.innerHTML = `<i class="fa-regular ${iconClass}"></i>`;
            if (darkModeToggleMobile) {
                darkModeToggleMobile.innerHTML = `<i class="fa-regular ${iconClass}"></i> Mode ${text}`;
            }
            
            // Changer le logo
            if (logo) {
                logo.src = isDark ? "IMAGES/Logo_mode_dark.png" : "IMAGES/Logo_mode_light.png";
            }
            
            // Sauvegarder la préférence
            localStorage.setItem("darkMode", isDark);
        }

        darkModeToggle.addEventListener("click", toggleDarkMode);
        if (darkModeToggleMobile) {
            darkModeToggleMobile.addEventListener("click", toggleDarkMode);
        }

        // Restaurer le mode sombre
        if (localStorage.getItem("darkMode") === "true") {
            document.body.classList.add("dark-mode");
            const iconClass = "fa-sun";
            const text = "Clair";
            
            darkModeToggle.innerHTML = `<i class="fa-regular ${iconClass}"></i>`;
            if (darkModeToggleMobile) {
                darkModeToggleMobile.innerHTML = `<i class="fa-regular ${iconClass}"></i> Mode ${text}`;
            }
            
            if (logo) {
                logo.src = "IMAGES/Logo_mode_dark.png";
            }
        }

        // Fermer le menu avec la touche Échap
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && nav.classList.contains("active")) {
                nav.classList.remove("active");
                overlay.classList.remove("active");
                document.body.style.overflow = "";
            }
        });

        // Gérer l'affichage du dark mode mobile au chargement et au redimensionnement
        window.addEventListener('load', handleDarkModeMobile);
        window.addEventListener('resize', handleDarkModeMobile);

        // Optimisation : vérifier l'espace disponible
        function checkNavSpace() {
            const header = document.querySelector('header');
            const nav = document.querySelector('nav');
            const logo = document.querySelector('.logo');
            
            if (header && nav && logo) {
                const headerWidth = header.offsetWidth;
                const logoWidth = logo.offsetWidth;
                const navWidth = nav.offsetWidth;
                const availableSpace = headerWidth - logoWidth - 100; // 100px pour les boutons
                
                console.log(`Espace disponible: ${availableSpace}px, Nav besoin: ${navWidth}px`);
            }
        }

        // Vérifier lors du redimensionnement
        window.addEventListener('resize', checkNavSpace);
        window.addEventListener('load', checkNavSpace);