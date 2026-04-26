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

// Auto-highlight active nav link based on current page
const currentPage = document.body.dataset.page;
const navLinks = document.querySelectorAll('.menu-nav a');

navLinks.forEach(link => {
    if (link.dataset.page === currentPage) {
        link.classList.add('active');
    }
});

