class UberPrice {
    static Baseprice = 30;
    static kmRate = 15;
    static timeRate = 10;

    constructor(distance, duration) {
        this.distance = distance;
        this.duration = duration;
    }

    calculatePrice() {
        var distancePrice = this.distance * UberPrice.kmRate;
        var timePrice = this.duration * UberPrice.timeRate;
        var totalPrice = distancePrice + timePrice + UberPrice.Baseprice;

        return totalPrice;
    }

    getDistance() {
        return this.distance;
    }

    setDistance(distance) {
        this.distance = distance;
    }

    getDuration() {
        return this.duration;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    toString() {
        return `Uber summary detail: [distance = ${this.distance.toFixed(2)} Kilometers, and duration = ${this.duration} minutes]`;
    }
}

const calc = new UberPrice(6.5,20);
const price = calc.calculatePrice();
console.log(calc.toString());
console.log(`Total price ${price.toFixed(2)}`);