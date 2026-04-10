const hamburgerBtn = document.getElementById("hamburgerBtn");
const menuPanel = document.getElementById("menuPanel");
const closeBtn = document.getElementById("closeBtn");

function openMenu() {
    menuPanel.classList.add("open");
    hamburgerBtn.classList.add("hide-icon");
    closeBtn.classList.add("show-close");
}

function closeMenu() {
    menuPanel.classList.remove("open");
    hamburgerBtn.classList.remove("hide-icon");
    closeBtn.classList.remove("show-close");
}

hamburgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
