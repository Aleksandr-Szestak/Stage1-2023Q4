/* ----------- burger --------------- */
let burger = document.querySelector(".burger");

burger.addEventListener('click', ()=>{
    document.querySelector('nav').classList.toggle('burger-menu-open');
    document.querySelector('.burger').classList.toggle('burger-open');
    document.querySelector('body').classList.toggle('burger-menu-open-y');
});

let linkMenu = document.querySelectorAll(".menu-link");

linkMenu.forEach((hitMenu, idx) => {
	hitMenu.addEventListener('click', () => {
        document.querySelector('nav').classList.remove('burger-menu-open');
        document.querySelector('nav').style.transition = '0s';
        document.querySelector('.burger').classList.remove('burger-open');
        document.querySelector('body').classList.remove('burger-menu-open-y');        
	});
});
