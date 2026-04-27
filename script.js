const hamburgerBtn = document.getElementById("hamburgerBtn");
const menuPanel = document.getElementById("menuPanel");
const closeBtn = document.getElementById("closeBtn");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu() {
    menuPanel.classList.add("open");
    menuOverlay.classList.add("active");
    hamburgerBtn.classList.add("hide-icon");
    closeBtn.classList.add("show-close");
}

function closeMenu() {
    menuPanel.classList.remove("open");
    menuOverlay.classList.remove("active");
    hamburgerBtn.classList.remove("hide-icon");
    closeBtn.classList.remove("show-close");
}

hamburgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);

// Escape key closes menu
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeMenu();
});

// Active nav
const currentPage = document.body.getAttribute("data-page");

document.querySelectorAll(".menu-nav a").forEach(link => {
    link.classList.remove("active");
    if (currentPage && link.getAttribute("data-page") === currentPage) {
        link.classList.add("active");
    }
});