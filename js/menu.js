let btn_menu = document.querySelectorAll('.menu');
let block_menu = document.querySelectorAll('.block_menu');

let btn_active = true;


btn_menu.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (btn_active == true) {

            block_menu[index].style.right = '0'


            btn_active = false;

        }
        else {
            block_menu[index].style.right = '-100%'

            btn_active = true;
        }
    })

})

// btn_menu.addEventListener('click', () => {
//     if (btn_active == false) {
//         block_menu.style.right = '0';
//         btn_active = true;
//     }
//     else{
//         block_menu.style.right = '-100%';
//         btn_active = false;
//     }
// });