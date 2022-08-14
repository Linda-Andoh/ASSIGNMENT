// Creat Hamster//

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

// Create Person//
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

// //Chef Makes Dinner//

class Dinner {
    constructor( appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
    chef() {
        console.log(`${this.appetizer, this.entree, this.dessert}`);
    }

}
const dinner1 = new Dinner('Guacamole', 'Cheesecake', 'Meatloaf');
const dinner2 = new Dinner('Deviled eggs', 'Apple pie', 'Pasta');
const dinner3 = new Dinner('Buffalo wings', 'Custard', 'Lasagna');

console.log(dinner1);
console.log(dinner2);
console.log(dinner3);

dinner1.chef();
dinner2.chef();
dinner3.chef();

