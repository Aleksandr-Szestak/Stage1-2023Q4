/* ----------- burger --------------- */
let burger = document.querySelector(".burger");

burger.addEventListener('click', ()=>{
    document.querySelector('nav').classList.toggle('burger-menu-open');
    // document.querySelector('header').classList.toggle('burger-menu-open');
    document.querySelector('.burger').classList.toggle('burger-open');
});
