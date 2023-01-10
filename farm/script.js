class Animal {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`Hi from Animal`);
  }

  sing() {
    console.log(`I believe i can fly …`);
  }
}

class Cow extends Animal {
  constructor(name) {
    super(name);
  }

  sayName() {
    console.log(`my name is: ${this.name}`);
  }

  sing() {
    console.log(`Muuu`);
  }
}

class Sheep extends Animal {
  constructor(name) {
    super(name);
  }

  sayName() {
    console.log(`my name is: ${this.name}`);
  }

  sing() {
    console.log(`Beee`);
  }
}

class Farm {
  #animalsArr;

  constructor() {
    this.#animalsArr = [
      new Sheep("Snow"),
      new Cow("Nellie"),
      new Cow("Bessie"),
      new Sheep("Cloud"),
      new Sheep("Wool"),
    ];
  }

  wakeUp() {
    this.#animalsArr.forEach((animal) => {
      animal.sayName();
      animal.sing();
    });
  }
}

const farm = new Farm();
farm.wakeUp();
