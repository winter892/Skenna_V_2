

document.getElementById("type").addEventListener("change", function () {
  const type = this.value;

  const etudiantFields = document.getElementById("etudiant_fields");
  const proprioFields = document.getElementById("proprio_fields");

  if (type === "etudiant") {
    etudiantFields.classList.remove("hidden");
    proprioFields.classList.add("hidden");
  } 
  else if (type === "proprietaire") {
    proprioFields.classList.remove("hidden");
    etudiantFields.classList.add("hidden");
  } 
  else {
    etudiantFields.classList.add("hidden");
    proprioFields.classList.add("hidden");
  }
});

document.getElementById("type").addEventListener("change", function () {
  const type = this.value;

  const etudiantFields = document.getElementById("etudiant_fields");
  const proprioFields = document.getElementById("proprio_fields");

  if (type === "etudiant") {
    etudiantFields.classList.remove("hidden");
    proprioFields.classList.add("hidden");
  } 
  else if (type === "proprietaire") {
    proprioFields.classList.remove("hidden");
    etudiantFields.classList.add("hidden");
  } 
  else {
    etudiantFields.classList.add("hidden");
    proprioFields.classList.add("hidden");
  }
});
