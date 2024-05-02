class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getColor() {
        return this.color;
    };

    setColor(color) {
        this.color = color;
    };

    getRadius() {
        return this.radius;
    };

    setRadius(radius) {
        this.radius = radius;
    };

    toString() {
        return (`[radius = ${this.radius} and color = ${this.color}]`);
    };

    getArea() {
        return this.radius * this.radius * Math.PI;
    };

    getCircumference() {
        return 2 * Math.PI * this.radius;
    };
}

let cir = new Circle(1.0, "red");
console.log(cir);
console.log(cir.getColor());
console.log(cir.getRadius());
cir.setColor("green")
console.log(cir.getColor())
cir.setRadius(9.0)
console.log(cir.getRadius());
console.log(`Circle: ${cir.toString()}`);
console.log(cir.getArea());
console.log(cir.getCircumference());
