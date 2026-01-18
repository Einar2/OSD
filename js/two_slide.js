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

let audio = New Audio("./music/osd_mixdown.wav");



// Выбираем формат в зависимости от поддержки браузером


btn_music.addEventListener('click', () => {
    audio.play();
    setTimeout(() => {
        step++;
        next_slide();
    }, 23000);
})
