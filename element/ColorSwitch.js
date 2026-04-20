export class ColorSwitcher {
    constructor(element, colors, initialColorIndex) {
        this._element = element;
        this._colors = colors;
        // this._colorIndex = initialColorIndex; // % ColorSwitcher.colors.length;
        this.setColor(initialColorIndex); // this._element.style.backgroundColor = this._colors[this.colorIndex];
        this.addClickHandler();
    }


    setColor (index) {
        this._colorIndex = index;
        if (this._colorIndex < 0 || this._colorIndex > this._colors.length) {
            throw new Error("initialColorIndex index is out of colors boundaries");
        }
        this._element.style.backgroundColor = this._colors[this._colorIndex];
    }

    reset () {
        this.setColor(0);
    }

    // static backgroundColorList = ['red', 'blue', 'green'];

    addClickHandler() {
        // colorIndex = 0;
        this._element.addEventListener('click', () => {
            this.setColor((this._colorIndex + 1) % this._colors.length); // this._element.style.backgroundColor = this._colors[this.colorIndex];
        });
    }

    getElement() { return this._element; }
}