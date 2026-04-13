import { CounterController } from "./CounterController.js";

export class Counter {
    constructor() {
        this._controller = new CounterController();
        this._element = this._createRoot(this._controller);
        this._element.appendChild(new CounterController('+', this._controller.increment).getElement());
        this._element.appendChild(new CounterController('-', this._controller.decrement).getElement());
    }
    
    _createRoot(counterController){
        const root = document.createElement('div');
        const textContainer = document.createElement('p');
        root.style.textAlign = "center";
        root.textContent = `${counterController.count}`;
        root.addEventListener("click", () => {
            counterController.increment();
            root.textContainer = `${counterController.count}`;
        });
        root.appendChild('textContainer');
        return root;    
    }

    getElement() {
            return this._element;
        };
}