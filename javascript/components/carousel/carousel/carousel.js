import { CarouselItem } from "./element.js";

export class Carousel {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this._element = element;
        /** @type {Array<CarouselItem>} */
        this._items = [];
        this._index = null;
    }

    switchItem(index) {
        if (index < 0 || index >= this._items.length)
            throw new Error("Index is out of bounds");
        if (this._index !== null) {
            this._items[this._index].hide();
        }
        const item = this._items[index];
        this._index = index;
        item.show();
    }

    nextItem() {
        this.switchItem((this._index + 1) % this._items.length);
    }

    previousItem() {
        this.switchItem(this._index == 0 ? this._items.length - 1
            : this._index - 1);
    }

    createElement(title, description, image) {
        const itemElement = document.createElement('div');
        // item.className('item-carousel');
        const item = new CarouselItem(itemElement, title, description, image);
        item.initElement();
        this._element.appendChild(itemElement);
        this._items.push(item);
    }

    _onLeftClick() {

    }
    _onRightClick() {
        const leftButton = document.querySelector('.left-button');
        leftButton.addEventListener('click', () => {
            this._element.remove();
        });

    }
}
