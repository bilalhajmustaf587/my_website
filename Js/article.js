document.querySelectorAll(".toggle-details").forEach(button => {
    button.addEventListener("click", function () {
        let details = this.nextElementSibling;
        details.style.display = details.style.display === "none" ? "block" : "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.querySelector(".menu-toggle");
    let navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // عرض/إخفاء القائمة
    });
});
