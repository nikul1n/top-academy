import { CardElement } from "./CardElement.js";

export class GameContainer {
    constructor(element, rows, cols, triesCount, cardListContainer, cardList) {
        this._element = element;
        this._cardListContainer = cardListContainer;
        this._cardList = cardList;
        this._maxOpenedCount = 2;
        if ((rows * cols) % this._maxOpenedCount != 0) {
            throw new Error("Game can't have odd amount of cards");
        }
        this._rows = rows;
        this._cols = cols;
        this._openedCards = [];
        this._maxRemainingTries = triesCount;
        this._remainingTries = 0;
        this._successCount = 0;
        this._cardElements = [];

        this._element.addEventListener('click', this.onCardClick.bind(this));
        this._triesCounter = document.createElement("p");
        this._triesCounter.className = "tries-counter";

        this._cardListContainer = document.createElement('div');
        this._cardListContainer.className = "cards-container";
        this._cardList = document.createElement('ol');
        this._cardList.classList.add("cards");

        this._successCounter = document.createElement("p");
        this._successCounter.className = "success-counter";

        this._gameOverElement = document.createElement('p');
        this._gameOverElement.classList.add("game-over", "hidden");
        this._gameOverElement.textContent = "Game Over";
        this._restartButton = document.createElement("button");
        this._restartButton.textContent = "Restart";
        this._restartButton.classList.add("restart-button", "hidden");
        this._restartButton.addEventListener('click', this.restart.bind(this));
    }

    appendDefaulChildren() {
        this.updateTriesCounter(this._maxRemainingTries);
        this._element.appendChild(this._triesCounter);
        this.appendCardChildren();
        this._cardListContainer.appendChild(this._cardList);
        this._element.appendChild(this._cardListContainer);
        this._element.appendChild(this._successCounter);
        this._cardListContainer.appendChild(this._gameOverElement);
        this._cardListContainer.appendChild(this._restartButton);
    }

    initialize() {
        this._openedCards = [];
        this._cardElements = this.generateCards();
        this.updateTriesCounter(this._maxRemainingTries);
        this.updateSuccessCounter(0);
    }

    restart() {
        this._cardElements.forEach((card) => card.getElement().remove());
        this.initialize();
        this.appendCardChildren();
        this._gameOverElement.classList.add("hidden");
        this._cardList.classList.remove("hidden");
        this._restartButton.classList.add("hidden");
    }

    appendCardChildren() {
        this._cardElements.forEach((card) =>
            this._cardList.appendChild(card.getElement()),
        );
    }

    updateTriesCounter(remainingTries) {
        this._remainingTries = remainingTries;
        this._triesCounter.textContent = this._remainingTries;
    }

    updateSuccessCounter(successCount) {
        this._successCount = successCount;
        this._successCounter.textContent = this._successCount;
    }

    onCardClick(event) {
        const cardHTMLElement = event.target.closest(`.${CardElement.className}`);
        if (!cardHTMLElement) {
            return;
        }

        const selectedCard = this._cardElements.find(
            (cardElement) => cardElement.getElement() == cardHTMLElement,
        );

        if (selectedCard.guessed) return;


        if (this._openedCards.length >= this._maxOpenedCount) {
            const isEqualToFirst = (card) => card.isEqual(this._openedCards[0]);
            if (this._openedCards.every(isEqualToFirst)) {
                this._openedCards.forEach(card => card.guessed = true);
                this.updateSuccessCounter(this._successCount+2);
            } else {
                this.updateTriesCounter(this._remainingTries - 1);
                if (this._remainingTries <= 0) {
                    this._makeGameOver();
                }
                this._openedCards.forEach(card => card.hide());
            }
            this._openedCards = [];
        } else if (this._openedCards.at(-1) == selectedCard) { return; }

        this._openedCards.push(selectedCard);
        selectedCard.show();
    }

    _makeGameOver() {
        // const parent = cardList.parentElement;
        // const cardList = this._cardList; //_element.querySelector(".cards");
        this._cardList.classList.add("hidden");
        this._gameOverElement.classList.remove("hidden");
        this._restartButton.classList.remove("hidden");
    }

    getElement() {
        return this._element;
    }

    static _generatePalette(count) {
        const step = 360 / count;
        let currentHue = 23;
        let isEven = false;
        return new Array(count).fill(0).map(() => {
            const result = `hsl(${Math.floor(currentHue % 360)}, 80%, ${isEven ? "50" : "80"}%)`;
            currentHue += step;
            isEven = !isEven;
            return result;
            // return `hsl(${currentHue}, 80%, 80%)`;
        });
    }
    generateCards() {
        const pairsCount = (this._rows * this._cols) / 2;

        const [hiddenColor, ...cardColors] = GameContainer._generatePalette(pairsCount + 1);

        const cardElements = [];

        for (let i = 0; i < pairsCount; i++) {
            const card = new CardElement(
                document.createElement('li'),
                hiddenColor,
                cardColors[i],
            );
            cardElements.push(card);
            cardElements.push(card.clone());
        }

        cardElements.sort((a, b) => Math.random() - 0.5);

        return cardElements;
    }
}