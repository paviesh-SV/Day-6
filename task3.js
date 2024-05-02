class Person {
    constructor(name, age, gender, email, address, phone) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }

    intorduce() {
        if(this.name) {
            console.log(`my name is ${this.name}`);
        }
        if(this.age) {
            console.log(`my age is ${this.age}`);
        }
        if(this.gender) {
            console.log(`my gender is ${this.gender}`);
        }
        if(this.email) {
            console.log(`my email is ${this.email}`);
        }
        if(this.address) {
            console.log(`my address is ${this.address}`);
        }
        if(this.phone) {
            console.log(`my phone number is ${this.phone}`);
        }
    }
}
var person = new Person("Victor", "31", "male", "FOOD@gmail.com", "Texas", "84482934");
person.intorduce();