let audioContext;
let audioBuffer;
let isAudioLoaded = false;

// Инициализация аудио
async function initAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Выбираем формат
        const audioFormat = canPlayMP3 ? 'mp3' : 'ogg';
        const response = await fetch(`../music/osd_mixdown.${audioFormat}`);
        const arrayBuffer = await response.arrayBuffer();
        audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        isAudioLoaded = true;
        console.log('Аудио загружено и готово к воспроизведению');
    } catch (error) {
        console.error('Ошибка загрузки аудио:', error);
    }
}

// Воспроизведение через Web Audio API
function playAudioWithWebAudio() {
    if (!isAudioLoaded) {
        console.log('Аудио еще не загружено');
        return;
    }
    
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start(0); // Нулевая задержка
    
    setTimeout(() => {
        step++;
        next_slide();
    }, 23000);
}

// Инициализируем при загрузке страницы
window.addEventListener('load', initAudio);

btn_music.addEventListener('click', () => {
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume(); // Разблокируем аудиоконтекст
    }
    playAudioWithWebAudio();
});
