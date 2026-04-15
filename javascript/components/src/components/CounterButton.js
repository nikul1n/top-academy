export class CounterButton {

    constructor(caption, action) {
        this._element = document.createElement('button');
        this._element.textContent = caption;
        this._element.addEventListener(action);

    }

    getElement() {
        
    }
}