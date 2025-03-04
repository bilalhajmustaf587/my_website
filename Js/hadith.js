    // عرض حديث عشوائي عند النقر على الزر
    const hadiths = [
        "قال رسول الله ﷺ: \"إنما بعثت لأتمم مكارم الأخلاق\".",
        "قال رسول الله ﷺ: \"عليكم بالصدق، فإن الصدق يهدي إلى البر، وإن البر يهدي إلى الجنة\".",
        "قال رسول الله ﷺ: \"الراحمون يرحمهم الرحمن، ارحموا من في الأرض يرحمكم من في السماء\".",
        "قال رسول الله ﷺ: \"خيركم من تعلم القرآن وعلمه\".",
        "قال رسول الله ﷺ: \"لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه\"."
    ];

    let hadithText = document.getElementById("hadith-text");
    let randomHadithBtn = document.getElementById("random-hadith-btn");

    randomHadithBtn.addEventListener("click", function () {
        let randomIndex = Math.floor(Math.random() * hadiths.length);
        hadithText.textContent = hadiths[randomIndex];
    });