
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
}, 5000);

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("header"); 
    const modeBtn = document.createElement("button");
    modeBtn.id = "darkModeToggle";

    // Icône + texte
    modeBtn.innerHTML = `<i class="fa-regular fa-moon"></i> `;
    modeBtn.style.marginLeft = "15px";
    header.appendChild(modeBtn);

    const logo = document.getElementById("siteLogo");

    modeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");

        // Icônes professionnelles
        modeBtn.innerHTML = isDark 
            ? `<i class="fa-regular fa-sun"></i> `
            : `<i class="fa-regular fa-moon"></i> `;

        // Logo dynamique
        logo.src = isDark
            ? "IMAGES/Logo_mode_dark.png"
            : "IMAGES/Logo_mode_light.png";
    });
});


    // ========== MENU BURGER ==========
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });


// Ajoutez ce code JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menuList = document.querySelector('.menu-list');
    
    if (menuButton && menuList) {
        menuButton.addEventListener('click', function(e) {
            e.preventDefault();
            menuList.classList.toggle('show');
        });
        
        // Fermer le menu en cliquant ailleurs
        document.addEventListener('click', function(e) {
            if (!menuButton.contains(e.target) && !menuList.contains(e.target)) {
                menuList.classList.remove('show');
            }
        });
    }
});

