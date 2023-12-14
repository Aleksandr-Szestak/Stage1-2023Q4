/* ----------- burger --------------- */
let burger = document.querySelector(".burger");

burger.addEventListener('click', ()=>{
    document.querySelector('nav').classList.toggle('burger-menu-open');
    document.querySelector('nav').style.transition = '1s';
    document.querySelector('.burger').classList.toggle('burger-open');
    document.querySelector('body').classList.toggle('burger-menu-open-y');
});

let linkMenu = document.querySelectorAll(".menu-link");

linkMenu.forEach((hitMenu, idx) => {
	hitMenu.addEventListener('click', () => {
        document.querySelector('nav').classList.remove('burger-menu-open');
        document.querySelector('nav').style.transition = '0.2s';
        document.querySelector('.burger').classList.remove('burger-open');
        document.querySelector('body').classList.remove('burger-menu-open-y');        
	});
});

let spare = document.querySelector(".menu-link-spare");

spare.addEventListener('click', ()=>{
    document.querySelector('nav').classList.remove('burger-menu-open');
    document.querySelector('nav').style.transition = '1s';
    document.querySelector('.burger').classList.remove('burger-open');
    document.querySelector('body').classList.remove('burger-menu-open-y');
});

/* ----------- slider --------------- */
let currentSlider = 0;

const slides = document.querySelectorAll(".slider-item");
const leftButton = document.querySelector(".l-arrow");
const rightButton = document.querySelector(".r-arrow");
const sliderItems = document.querySelector(".slider-items");
const slider_images_descriptions = document.querySelector(".images-descriptions");

const icon = document.querySelectorAll(".slider-icon");
const iconBlock = document.querySelectorAll(".slider-icon span");

const slideWidth = slides[0].clientWidth;

leftButton.addEventListener("click", slidePrev);
rightButton.addEventListener("click", slideNext);

/* observe */
let observer = new IntersectionObserver(autoSlider, {threshold: 0.33});
observer.observe(slider_images_descriptions);
iconBlock.forEach(item => {
  item.addEventListener("animationend", slideNext);
});

function autoSlider(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      icon[0].classList.add("slider-icon-active");
      observer.unobserve(entry.target);
    }
  });
}
/* end observe */

function slideNext() {
    console.log(currentSlider);
    currentSlider++;
    if (currentSlider >= slides.length) currentSlider = 0;
    moveSlider()
  }
  
  function slidePrev() {
    console.log(currentSlider);
    currentSlider--;
    if (currentSlider < 0) currentSlider = slides.length - 1;
    moveSlider()
  }

  function moveSlider() {
    icon.forEach(i => i.classList.remove('slider-icon-active'));
    icon[currentSlider].classList.add('slider-icon-active');
  
    sliderItems.style.transform = `translateX(-${currentSlider * slideWidth}px)`;
  }
  
  