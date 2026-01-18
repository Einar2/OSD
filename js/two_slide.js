const animation = document.getElementById("animation");

animation.addEventListener("animationend", (e) => {
    switch (e.animationName) {
        case "title-scale-out":
            [...document.getElementsByClassName("intro-sf-title-bound")].forEach(
                (element, index, array) => {
                    element.classList.add("visible");
                }
            );
            break;
        case "bound-fade-in":
            setTimeout(() => {
                animation.classList.add("outro");
            }, 2000);
            break;
        default:
            break;
    }
});



// to play sound

let btn_music = document.querySelector('.button');

let audio;

const testAudio = new Audio();
const canPlayMP3 = testAudio.canPlayType('audio/mpeg');
const canPlayOGG = testAudio.canPlayType('audio/ogg');

// Выбираем формат в зависимости от поддержки браузером
if (canPlayMP3 !== '' && canPlayMP3 !== 'no') {
    audio = new Audio("https://github.com/Einar2/OSD/tree/main/music/osd_mixdown.mp3");
} else if (canPlayOGG !== '' && canPlayOGG !== 'no') {
    audio = new Audio("./../music/osd_mixdown.ogg");
} else {
    console.error("Браузер не поддерживает ни MP3, ни OGG форматы");
}

btn_music.addEventListener('click', () => {
    audio.play();
    setTimeout(() => {
        step++;
        next_slide();
    }, 23000);
})
