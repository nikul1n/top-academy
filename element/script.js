'use strict';

class ColorSwitcher {
    constructor(element) {
        this._element = element;
        this.addClickHandler();
        this._element.style.width = "100px";
        this._element.style.height = "100px";
    }
    
    static backgroundColorList = ['red', 'blue', 'green'];

    addClickHandler() {
        let i = 0;
        this._element.addEventListener('click', () => {
            i++;
            if (i == ColorSwitcher.backgroundColorList.length) {
                i = 0;
            }
            this._element.style.backgroundColor = ColorSwitcher.backgroundColorList[i];
            // this.style.backgroundColor = `${colorList[i]}`;
        });
    }
}


const switcher = new ColorSwitcher(document.getElementById("button-switcher-color"));