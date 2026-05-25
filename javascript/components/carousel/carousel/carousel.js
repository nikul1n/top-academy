import { Element as CarouselElement } from "./element.js";

export class Carousel {
    constructor(element, ) {
        this._element = element;

    }

    showElementCarousel(title, description, image) {
        const item = document.createElement('li');
        const element = new CarouselElement(item, title, description, image);
        element.initElement();
        this._element.appendChild(item);
    }

    _onLeftClick() {
        
    }
}

function createCarouselAttached() {
    const boxCarousel = document.createElement('ul');
    boxCarousel.className = 'carousel';

    const leftButton = document.createElement('button');
    leftButton.className = 'left-button';
    
    const rightButton = document.createElement('button');
    rightButton.className = 'right-button';

    boxCarousel.appendChild(leftButton);
    boxCarousel.appendChild(rightButton);

    document.body.appendChild(boxCarousel);
    return new Carousel(boxCarousel);
}

export const carousel = createCarouselAttached();