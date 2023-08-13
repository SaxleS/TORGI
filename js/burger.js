const menuBtn = document.querySelector ('.menu_btn');
const menuMobile = document.querySelector ('.menu_list');
menuBtn.addEventListener('click', ()=> {
    menuMobile.classList.toggle('burger-open');
});