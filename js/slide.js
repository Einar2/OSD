// массив из кнопок
let btn_slide = document.querySelectorAll('.btn_slide');



// массив из слайдов
let slides = document.querySelectorAll('.slide');

// шаг для переключения слайда
let step = 0;

btn_slide.forEach(item => {
    item.addEventListener('click', () => {
        step++
        slides.forEach(item => {

            if (item.classList.contains != "not_active_slide") {
                item.classList.add('not_active_slide')
            }
            
        })
        slides[step].classList.remove('not_active_slide')
        
    });
});



