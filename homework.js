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


class Person{
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
}


