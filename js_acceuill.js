document.addEventListener("DOMContentLoaded", () => {

    // ========== MODE SOMBRE ==========
    const header = document.querySelector("header"); 
    const modeBtn = document.createElement("button");
    modeBtn.id = "darkModeToggle";
    modeBtn.textContent = "Mode sombre 🌙";  
    modeBtn.style.marginLeft = "15px";
    header.appendChild(modeBtn);

    const logo = document.getElementById("siteLogo");

    modeBtn.addEventListener("click", () => {

        // 1) basculer le mode
        document.body.classList.toggle("dark-mode");

        // 2) vérifier l'état actuel
        const isDark = document.body.classList.contains("dark-mode");

        // 3) changer texte du bouton
        modeBtn.textContent = isDark ? "Mode clair ☀️" : "Mode sombre 🌙";

        // 4) changer logo
        logo.src = isDark
            ? "IMAGES/Logo_mode_dark.png"
            : "IMAGES/Logo_mode_light.png";
    });

    // ========== MENU BURGER ==========
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

});


// ========== FORMULAIRE ==========
document.getElementById("searchForm").addEventListener("submit", function(e){
    const budget = document.getElementById("budget").value;
    const ville = document.getElementById("ville").value;
    const type = document.getElementById("type").value;
    if(!budget || !ville || !type){
        alert("Veuillez remplir tous les champs !");
        e.preventDefault();
    }
});


// ========== TÉMOIGNAGES ==========
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


// ========== SLIDER BACKGROUND ==========
const track = document.querySelector(".hero-track");
let scrollAmount = 0;

function slideImages() {
  scrollAmount += 1;
  if (scrollAmount >= track.scrollWidth / 2) {
    scrollAmount = 0;
  }
  track.style.transform = `translateX(-${scrollAmount}px)`;
  requestAnimationFrame(slideImages);
}

slideImages(); 