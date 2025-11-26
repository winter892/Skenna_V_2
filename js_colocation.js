// Dark mode functionality
document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("header"); 
    const modeBtn = document.createElement("button");
    modeBtn.id = "darkModeToggle";
    modeBtn.classList.add("dark-toggle-btn"); // ← important !
    modeBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
    modeBtn.style.marginLeft = "15px";
    header.appendChild(modeBtn);

    const logo = document.getElementById("siteLogo");

    modeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");

        modeBtn.innerHTML = isDark 
            ? `<i class="fa-regular fa-sun"></i>`
            : `<i class="fa-regular fa-moon"></i>`;

        logo.src = isDark
            ? "IMAGES/Logo_mode_dark.png"
            : "IMAGES/Logo_mode_light.png";
    });
});

// Scroll reveal functionality
const rEls = document.querySelectorAll(".reveal");
const showOnScroll = () => {
  rEls.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", showOnScroll);
showOnScroll();

// Typing effect for section title
const t = document.querySelector(".section-title");
const txt = t.textContent;
t.textContent = "";
let i = 0;

(function type() {
  if (i < txt.length) {
    t.textContent += txt.charAt(i);
    i++;
    setTimeout(type, 80);
  }
})();