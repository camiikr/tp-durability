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