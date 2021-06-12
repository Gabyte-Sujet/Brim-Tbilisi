let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
let line = document.getElementById('ln2');

let li = document.querySelectorAll('.wrapper .frst-above .visible-main .hdr ul li');



burger.addEventListener('click', () => {
    menu.classList.toggle('menu');
    line.classList.toggle('change');
});


li.forEach((e) => {
    e.addEventListener('click', () => {
        menu.classList.toggle('menu');
    line.classList.toggle('change');
    })
})