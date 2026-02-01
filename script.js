document.addEventListener("DOMContentLoaded", () => {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const buttons = document.getElementById("buttons");
    const overlay = document.getElementById("overlay");
    const card = document.getElementById("card");
    const img = document.getElementById("surpriseImg");

    let offsetX = 0;
    let offsetY = 0;

    // 😈 NO button chaotic movement (bounded)
    noBtn.addEventListener("mouseenter", () => {

        const areaW = buttons.clientWidth - noBtn.offsetWidth;
        const areaH = buttons.clientHeight - noBtn.offsetHeight;

        let jumpX = (Math.random() - 0.3) * 160;
        let jumpY = (Math.random() - 0.5) * 90;

        offsetX += jumpX;
        offsetY += jumpY;

        offsetX = Math.max(0, Math.min(offsetX, areaW));
        offsetY = Math.max(0, Math.min(offsetY, areaH));

        offsetX = Math.max(offsetX, areaW / 3);

        noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    // 💖 YES opens popup & hides buttons
    yesBtn.addEventListener("click", () => {
        img.src = "https://tse2.mm.bing.net/th/id/OIP.CPC3h-adye9vIg0VeV3YiQHaF9?pid=Api&P=0&h=180"; // replace
        overlay.classList.add("show");
        buttons.style.visibility = "hidden"; // 👈 hide YES & NO
    });

    // ⬅️ Click outside closes popup & restores buttons
    overlay.addEventListener("click", () => {
        overlay.classList.remove("show");
        buttons.style.visibility = "visible"; // 👈 show back
    });

    // 🛑 Prevent inside click from closing
    card.addEventListener("click", (e) => {
        e.stopPropagation();
    });

});
