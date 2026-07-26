window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
});
let musicBtn = document.getElementById("music");
let music = document.getElementById("bgMusic"); // your audio element

function audioPlay(){
    music.loop=true;
    music.play();
}
function pausee(){
    music.pause();
    music.currentTime = 0;
}
musicBtn.addEventListener("click", (audioPlay) );
musicBtn.addEventListener("dblclick",(pausee));
