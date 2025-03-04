document.addEventListener("DOMContentLoaded", function () {
    let scrollTopBtn = document.getElementById("scrollTopBtn");
    
    // إخفاء/إظهار الزر عند التمرير
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });
    
   
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

   
    if (!sessionStorage.getItem("welcomeMessageShown")) {
        alert("مرحبًا بك في موقع شباب الإسلام الدعوي! نأمل أن تستفيد من محتوياتنا.");
        sessionStorage.setItem("welcomeMessageShown", "true");
    }
});
