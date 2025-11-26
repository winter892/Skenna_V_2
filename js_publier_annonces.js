// ===== h.js =====

// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;
  const toggleTheme = document.getElementById("toggleTheme");
  const form = document.querySelector("form");
  const photoInput = document.getElementById("photo");
  const imgPreview = document.getElementById("imgPreview");
  const descInput = document.getElementById("desc");
  const nomInput = document.getElementById("nom");
  const emailInput = document.getElementById("email");
  const charCount = document.getElementById("charCount");

  // ===== Animation au chargement =====
  setTimeout(() => {
    form.classList.add("show");
  }, 300);

  // ===== Mode sombre / clair =====
  if(toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      body.classList.toggle("dark");
    });
  }

  // ===== Prévisualisation de l'image =====
  photoInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Veuillez sélectionner un fichier image valide !");
      photoInput.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      if (imgPreview) {
        imgPreview.src = e.target.result;
        imgPreview.style.display = "block";
      } else {
        const newImg = document.createElement("img");
        newImg.id = "imgPreview";
        newImg.src = e.target.result;
        newImg.style.maxWidth = "200px";
        newImg.style.display = "block";
        newImg.style.marginTop = "10px";
        newImg.style.borderRadius = "12px";
        photoInput.parentNode.appendChild(newImg);
      }
    };
    reader.readAsDataURL(file);
  });

  // ===== Sauvegarde nom/email dans cookie =====
  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }

  if(nomInput) {
    nomInput.addEventListener("blur", () => setCookie("nom", nomInput.value, 7));
  }
  if(emailInput) {
    emailInput.addEventListener("blur", () => setCookie("email", emailInput.value, 7));
  }

  // ===== Compteur de caractères =====
  if(descInput && charCount) {
    descInput.addEventListener("input", () => {
      const max = 200;
      let len = descInput.value.length;
      if(len > max) {
        descInput.value = descInput.value.substring(0, max);
        len = max;
      }
      charCount.textContent = `${len}/${max}`;
    });
  }

  // ===== Validation avant soumission =====
  form.addEventListener("submit", (e) => {
    const prixInput = document.getElementById("prix");
    const villeInput = document.getElementById("ville");
    const typeInput = document.getElementById("type");

    const prix = prixInput ? parseFloat(prixInput.value) : 0;
    const ville = villeInput ? villeInput.value : "";
    const type = typeInput ? typeInput.value : "";
    const desc = descInput ? descInput.value.trim() : "";

    if(prix <= 0) {
      alert("Le prix doit être supérieur à 0 !");
      e.preventDefault();
      return;
    }

    if(!ville || !type || desc.length < 10) {
      alert("Veuillez remplir correctement tous les champs.");
      e.preventDefault();
      return;
    }

    const confirmSubmit = confirm("Êtes-vous sûr de vouloir publier cette annonce ?");
    if(!confirmSubmit) {
      e.preventDefault();
    }
  });

});
