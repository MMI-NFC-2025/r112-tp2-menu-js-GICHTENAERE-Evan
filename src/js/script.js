// Je cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector("nav.menu");

// événements sur le bouton
toggle.addEventListener("click", () => {

// Vérification de l'état actuel du menu
const isOpen = toggle.ariaExpanded === "true";
const isClosed = !isOpen;
console.log("isOpen :", isOpen, "isClosed :", isClosed);

// Mise à jour des attributs ARIA
nav.ariaHidden = isOpen;        // si ouvert → cache, sinon montre
toggle.ariaExpanded = isClosed; // inverse l’état du bouton

// Empêche le défilement de la page quand le menu est ouvert
  document.body.classList.toggle("noscroll", isClosed);
});