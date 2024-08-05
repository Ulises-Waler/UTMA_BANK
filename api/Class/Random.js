class CardGenerator {
    constructor() {
        this.cardNumber = this.generateRandomNumber(16);
        this.expiryDate = this.generateExpiryDate(3);
        this.cvv = this.generateCVV();
    }

    generateRandomNumber(length) {
        const digits = [];
        for (let i = 0; i < length; i++) {
            digits.push(Math.floor(Math.random() * 10));
        }
        return digits.join('');
    }

    generateExpiryDate(years) {
        const date = new Date();
        date.setFullYear(date.getFullYear() + years);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        return `${month}/${year}`;
    }

    generateCVV() {
        const cvv = [];
        for (let i = 0; i < 3; i++) {
            cvv.push(Math.floor(Math.random() * 10));
        }
        return cvv.join('');
    }

    getCardDetails() {
        return {
            cardNumber: this.cardNumber,
            expiryDate: this.expiryDate,
            cvv: this.cvv
        };
    }
}

const cardGenerator = new CardGenerator();
const cardDetails = cardGenerator.getCardDetails();

cardDetails.cardNumber
cardDetails.expiryDate
cardDetails.cvv

export default CardGenerator

