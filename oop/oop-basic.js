class Account {
    constructor(cardNumber, cardValidityPeriod, balance, cvvCard) {
        this.cardNumber = cardNumber;
        this.cardValidityPeriod = cardValidityPeriod;
        this.cvvCard = cvvCard;
        this.balance = balance;
    }

    displayCardInfo() {
        console.log(`Номер карты: ${this.cardNumber},
            Срок действия карты: ${this.cardValidityPeriod},
            CVV-код: ${this.cvvCard}`)
            if ((this.cardValidityPeriod - 2026)< 0) {
                console.log(`Срок действия вашей карты истёк`);
            }
    }

    displayBalance() {
        console.log(`Ваш баланс ${this.balance}`);
    }
    withdraw(withdrawalAmount) {
        if ((this.balance - withdrawalAmount) < 0) {
            console.log(`Недостаточно средств на балансе для снятия ${withdrawalAmount}`);
            this.displayBalance();
        } else {
            this.balance = this.balance - withdrawalAmount;
            console.log(`Снятие средств ${withdrawalAmount}`);
            this.displayBalance();
        }
    }
    deposit(depositAmount) {
        this.balance = this.balance + depositAmount;
        console.log(`Баланс пополнен на ${depositAmount}`);
        this.displayBalance();
    }
}

const card1 = new Account(1234, 2025, 0, 123);

card1.displayCardInfo();
card1.deposit(1000);
card1.withdraw(5000);