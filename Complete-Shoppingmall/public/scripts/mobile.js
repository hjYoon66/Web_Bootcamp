const mobileMenuBtnElement = document.getElementById("mobile-menu-btn");

const moblieMenuElement = document.getElementById("mobile-menu");

function toggleMobileMenu() {
  moblieMenuElement.classList.toggle("open");
}

mobileMenuBtnElement.addEventListener("click", toggleMobileMenu);
