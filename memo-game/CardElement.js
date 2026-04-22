import { ColorSwitcher } from "../element/ColorSwitch";

export class CardElement {
    constructor (element, colorWhenHidden, colorWhenShowed) {
        this._element = element;
        this._switch = new ColorSwitcher(
            this._element,
            [colorWhenHidden, colorWhenShowed],
            0,

        )

    }
}