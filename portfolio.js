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
particlesJS("particles-js", {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffd54f"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.6
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffd54f",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },

      onclick: {
        enable: true,
        mode: "push"
      },

      resize: true
    },

    modes: {
      grab: {
        distance: 180,
        line_linked: {
          opacity: 1
        }
      },

      push: {
        particles_nb: 4
      }
    }
  },

  retina_detect: true
});
