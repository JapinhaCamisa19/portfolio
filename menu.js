
let btnMenu = document.getElementById('abri-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu1')


btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})
function ativarMonocromatico() {
    const body = document.body;
    const checkbox = document.getElementById('input');

    if (checkbox.checked) {
        body.classList.add('monocromatico');
    } else {
        body.classList.remove('monocromatico');
    }
}
