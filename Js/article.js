document.querySelectorAll(".toggle-details").forEach(button => {
    button.addEventListener("click", function () {
        let details = this.nextElementSibling;
        details.style.display = details.style.display === "none" ? "block" : "none";
    });
});