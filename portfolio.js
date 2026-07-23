<<<<<<< HEAD
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
});
let musicBtn = document.getElementById("music");
let music = document.getElementById("bgMusic"); // your audio element

function audioPlay(){
    music.loop=true;
    music.play();
}
function doubleClick(){
    music.pause();
    music.currentTime = 0;
}
musicBtn.addEventListener("click", (audioPlay) );
musicBtn.addEventListener("dblclick",(doubleClick));
=======
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
>>>>>>> be04edd (Update portfolio with music button animation)
