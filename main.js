// =========================
// 1. SMOOTH SCROLLING
// =========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {

        const targetId = anchor.getAttribute("href");

        // Ignore empty links
        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        // Close the mobile menu after clicking a link
        const nav = document.querySelector(".site-nav");
        const toggle = document.querySelector(".menu-toggle");

        if (nav && toggle && nav.classList.contains("open")) {

            nav.classList.remove("open");

            toggle.setAttribute("aria-expanded", "false");

            toggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        }
    });
});


// =========================
// 2. MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = siteNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        if (isOpen) {

            menuToggle.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';

        } else {

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }
    });
}


// =========================
// 3. PRODUCT CARD ANIMATION
// =========================

const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });

});