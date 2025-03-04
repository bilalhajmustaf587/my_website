let players = []; // مصفوفة لتخزين جميع مشغلات الفيديو

// تحميل YouTube IFrame API
function onYouTubeIframeAPIReady() {
    document.querySelectorAll("iframe").forEach((iframe, index) => {
        players[index] = new YT.Player(iframe, {
            events: {
                "onStateChange": onPlayerStateChange
            }
        });
    });
}

// عند تشغيل أي فيديو، يتم إيقاف الباقي
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        players.forEach(player => {
            if (player !== event.target) {
                player.pauseVideo();
            }
        });
    }
}

// إضافة سكريبت YouTube API إلى الصفحة
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.querySelector(".menu-toggle");
    let navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // عرض/إخفاء القائمة
    });
});
