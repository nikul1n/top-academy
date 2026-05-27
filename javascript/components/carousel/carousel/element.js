export class CarouselItem {
    /**
     * @param {HTMLElement} element 
     * @param {string} title 
     * @param {string} description
     * @param {*} image 
     */
    constructor(element, title, description, image) {
        this._element = element;
        this._title = title;
        this._description = description;
        this._image = image;
    }

    initElement() {
        this._element.className = `item-carousel`;
        
        const title = document.createElement('h3');
        title.className = `item-title`;
        title.textContent = this._title;

        const description = document.createElement('h4');
        description.className = `item-description`;
        description.textContent = this._description;

        this._element.appendChild(title);
        this._element.appendChild(description);
    }

    show(){
        this._element.classList.add('active');
    }

    hide() {
        this._element.classList.remove('active');
    }
}