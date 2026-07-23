window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
});
const musicBtn = document.getElementById("music");
const music = document.getElementById("bgMusic"); // your audio element

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.classList.add("playing");
    } else {
        music.pause();
        musicBtn.classList.remove("playing");
    }
});
