// Select elements
const toggleButton = document.querySelector(".navbar__toggle");
const closeButton = document.querySelector(".navbar__close");
const menuContainer = document.querySelector(".navbar__menu-container");

// Open menu
toggleButton.addEventListener("click", () => {
  const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
  toggleButton.setAttribute("aria-expanded", String(!isExpanded));
  menuContainer.classList.add("navbar__menu-container--active");
});

// Close menu
closeButton.addEventListener("click", () => {
  menuContainer.classList.remove("navbar__menu-container--active");
  toggleButton.setAttribute("aria-expanded", "false");
});
