const startButton = document.getElementById("startButton");

const intro = document.getElementById("intro");
const countdown = document.getElementById("countdown");
const mainSite = document.getElementById("mainSite");

const countNumber = document.getElementById("countNumber");

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");
const musicText = document.getElementById("musicText");

const openLetter = document.getElementById("openLetter");
const letterOverlay = document.getElementById("letterOverlay");
const closeLetter = document.getElementById("closeLetter");

const surpriseButton = document.getElementById("surpriseButton");
const finalScene = document.getElementById("finalScene");

let musicPlaying = false;


/* ================= START ================= */

startButton.addEventListener("click", () => {

    intro.style.display = "none";

    countdown.classList.add("active");

    startCountdown();

    startMusic();

});


/* ================= COUNTDOWN ================= */

function startCountdown() {

    let number = 3;

    countNumber.textContent = "0" + number;

    const timer = setInterval(() => {

        number--;

        if (number > 0) {

            countNumber.textContent = "0" + number;

        } else {

            clearInterval(timer);

            countdown.classList.remove("active");

            mainSite.classList.add("active");

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }

    }, 1000);

}


/* ================= MUSIC ================= */
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "Ⅱ";
    } else {
        music.pause();
        musicBtn.textContent = "♫";
    }
});
function startMusic() {

    music.play()
        .then(() => {

            musicPlaying = true;

            musicButton.classList.add("playing");

            musicText.textContent = "در حال پخش";

        })
        .catch(() => {

            musicText.textContent = "پخش موزیک";

        });

}


musicButton.addEventListener("click", () => {

    if (music.paused) {

        startMusic();

    } else {

        music.pause();

        musicPlaying = false;

        musicButton.classList.remove("playing");

        musicText.textContent = "موزیک";

    }

});


/* ================= LETTER ================= */

openLetter.addEventListener("click", () => {

    letterOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

});


function closeLetterModal() {

    letterOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


closeLetter.addEventListener(
    "click",
    closeLetterModal
);


/* کلیک روی فضای بیرون نامه */

letterOverlay.addEventListener("click", (event) => {

    if (event.target === letterOverlay) {

        closeLetterModal();

    }

});


/* ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeLetterModal();

    }

});


/* ================= SURPRISE ================= */

surpriseButton.addEventListener("click", () => {

    finalScene.classList.add("active");

    finalScene.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();

});


/* ================= CONFETTI ================= */

function createConfetti() {

    const colors = [
        "#d8b88a",
        "#b87882",
        "#f7eee6",
        "#9d5666"
    ];

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("span");

        piece.style.position = "fixed";
        piece.style.zIndex = "2000";

        piece.style.top = "-20px";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.width =
            Math.random() * 7 + 4 + "px";

        piece.style.height =
            Math.random() * 12 + 6 + "px";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        piece.style.pointerEvents = "none";

        piece.style.animation =
            `confettiFall ${Math.random() * 3 + 3}s linear forwards`;

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 6500);

    }

}


/* ================= CONFETTI CSS ================= */

const style = document.createElement("style");

style.innerHTML = `

@keyframes confettiFall {

    to {

        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: 0;

    }

}

`;

document.head.appendChild(style);
