export class GameContainer { 
    constructor(element, rows, cols ) {
        this._element = element;
        if ((rows * cols) % 2 !=0) {
            throw new Error ("Game can't have odd amount of cards");
        }
        this._rows = rows;
        this._cols = cols;
        this._cardElements = this.generateCards();
        this._cardElements.forEach((card) => 
        this._element.appendChild(card.getElement()))
    }
}

generateCards() {
    const pairsCount = (this._rows * this._cols) / 2;
    const cardElements = [];
    for (let i = 0; i < pairsCount; i++) {
        const card = new cardElements();
        cardElements.push(card);
        cardElements
    }
}