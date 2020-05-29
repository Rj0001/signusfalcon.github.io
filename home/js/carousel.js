const carouselSlide = document.querySelector('.carouselSlide');
const carouselContainer = document.querySelector('.carouselContainer');
const carouselImages = document.querySelectorAll('.carouselSlide img');

//Buttons
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const prevButtonGradient = document.querySelector('.prev-button-gradient');
const nextButtonGradient = document.querySelector('.next-button-gradient');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners

carouselContainer.addEventListener('hover', () => {

});

nextButton.addEventListener('click', () => {
    if (counter >= carouselImages.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

nextButtonGradient.addEventListener('click', () => {
    if (counter >= carouselImages.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButtonGradient.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
