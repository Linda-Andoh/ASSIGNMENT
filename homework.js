class Hamster {
    constructor(owner, name, price) {
        this.owner = owner;
        this.name = name;
        this.price = 15;
    }

    wheelRun() {
        console.log("squeak squeak");
    }

    eatFood() {
        console.log("nibble nibble");
    }

    getPrice() {
        console.log(`${this.price}`);
        return this.price;
    }
  }

  const Gus = new Hamster('Timmy', "Gus");
  console.log(Gus.owner);
  console.log(Gus.name);
  console.log(Gus.price);
  Gus.getPrice();


class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName() {
        console.log(`${this.name}`);
        return this.name;
    }

    getAge() {
        console.log(`${this.age}`);
        return this.age;
    }

    getWeight() {
        console.log(`${this.weight}`);
        return this.weight;
    }

    greet(name) {
        console.log(`Hello, ${name}!`);
    }

    eat() {
        this.weight++;
        this.mood += 1;
    }

    exercise() {
        this.weight--;
    }

    ageUp() {
        this.age += 15;
        this.height += 1;
        this.weight += 2;
        this.mood -= 1;
        this.bankAccount += 10;
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice(hamster);
    }
}

const timmy = new Person('Timmy');
console.log(timmy);

timmy.eat();
console.log(timmy);

timmy.ageUp();
console.log(timmy.age);
console.log(timmy);

timmy.exercise();
console.log(timmy);

timmy.buyHamster(Gus);
console.log(timmy);


