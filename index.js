window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sounds")
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector(".visual")
    const colours = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ];

    // get the sounds going !!!

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    // create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colours[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });

    }

});
