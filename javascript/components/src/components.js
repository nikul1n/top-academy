import { Counter } from "./components/Counter.js"

class App {
    constructor(element) {
        this.element = element;
        this.element.appendChild(new Counter().getElement());
    }
}

const app = new App(document.getElementById("app"));