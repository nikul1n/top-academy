import { Carousel } from "./carousel/carousel.js"

const boxCarousel = document.createElement('div');
boxCarousel.className = 'carousel';


const leftSection = document.querySelector('.left-section');
const leftButton = document.createElement('button');
leftButton.className = 'left-button';
leftButton.innerHTML = "&lt";
leftSection.appendChild(leftButton);

const centerSection = document.querySelector('.center-section');
centerSection.appendChild(boxCarousel);
const carousel = new Carousel(boxCarousel);

carousel.createElement("Заголовок 1", "Описание");
carousel.createElement("Заголовок 2", "Описание");
carousel.createElement("Заголовок 3", "Описание");
carousel.createElement("Заголовок 4", "Описание");
carousel.createElement("Заголовок 5", "Описание");
carousel.createElement("Заголовок 6", "Описание");
carousel.createElement("Заголовок 7", "Описание");
carousel.switchItem(0);

const rightSection = document.querySelector('.right-section');
const rightButton = document.createElement('button');
rightButton.className = 'right-button';
rightButton.innerHTML = "&gt";
rightSection.appendChild(rightButton);

leftButton.addEventListener('click', () => {
    carousel.previousItem();
});

rightButton.addEventListener('click', () => {
    carousel.nextItem();
});
