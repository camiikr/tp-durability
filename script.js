console.log("Bonjour");
const boutonTheme = document.querySelector("#bouton-theme");
boutonTheme.addEventListener("click", function () {
document.body.classList.toggle("sombre"); // ce qui se passe à chaque clic
if (document.body.classList.contains("sombre")) {
    boutonTheme.textContent = "Mode clair";
} else {
    boutonTheme.textContent = "Mode sombre";
}
});

const curseur = document.querySelector("#curseur-taille");

const valeurTaille = document.querySelector("#valeur-taille");
curseur.addEventListener("input", function () {
document.body.style.fontSize = curseur.value + "%";
valeurTaille.textContent = curseur.value + " %";
});

const heure = new Date().getHours();