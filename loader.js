const loader = document.getElementById("loader");
const progress = document.querySelector(".progress");
const loaderText = document.getElementById("loader-text");

let percent = 0;

const loading = setInterval(() => {
  percent += Math.floor(Math.random() * 8) + 1; 
  if (percent >= 100) {
    percent = 100;
    clearInterval(loading);

    setTimeout(() => {
      loader.style.display = "none";
    }, 300);
  }

  progress.style.width = percent + "%";
  loaderText.textContent = percent + "%";
}, 120);
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    loader.style.display = "flex";
    progress.style.width = "0%";
    loaderText.textContent = "0%";
  });
});

document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", () => {
    loader.style.display = "flex";
    progress.style.width = "0%";
    loaderText.textContent = "0%";
  });
});
