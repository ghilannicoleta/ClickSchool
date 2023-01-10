class Masina {
  isRunning;
  color;
  age;
  model;
  speed;

  constructor(culoare, an, model, speed) {
    this.isRunning = false;
    this.color = culoare;
    this.age = an;
    this.model = model;
    this.speed = 120;
  }

  start() {
    this.isRunning = true;
  }

  stop() {
    this.isRunning = false;
  }

  getCarInfo() {
    console.log(
      `${this.model} ${this.color} ${this.age} ${this.speed} ${this.isRunning}`
    );
  }

  accelerate() {}

  charge() {}
}

class VehiculElectric extends Masina {
  battery;
  constructor(model, culoare, an) {
    super(culoare, an, model);
    this.battery = new Battery();
  }

  accelerate() {
    this.speed += 10;
    this.battery.chargeLevel -= 5;
  }

  charge() {
    while (this.battery.chargeLevel < 100) {
      this.battery.charge();
    }
  }

  getCarInfo() {
    console.log(
      `${this.model} ${this.color} ${this.age} ${this.speed} ${this.isRunning} ${this.battery.chargeLevel} `
    );
  }
}

class VehiculCuPetrol extends Masina {
  constructor(color, an, model, capacitate, petrol) {
    super(color, an, model, capacitate, petrol);
    this.rezevoar = new Rezevoar(capacitate, petrol);
  }

  accelerate() {
    this.speed += 10;
    this.rezevoar.capacitate -= 1;
  }

  getCarInfo() {
    console.log(
      `${this.model} ${this.color} ${this.age} ${this.speed} ${this.isRunning}  ${this.rezevoar.capacitate}`
    );
  }

  charge() {
    this.rezevoar.charge();
  }
}

class Rezevoar {
  capacitate;
  petrol;

  constructor(capacitate, petrol) {
    this.capacitate = capacitate;
    this.petrol = petrol;
  }

  charge() {
    this.capacitate += 10;
  }
}

class Battery {
  chargeLevel;

  constructor() {
    this.chargeLevel = 0;
  }

  charge() {
    this.chargeLevel += 10;
  }
}

const car1 = new VehiculElectric("Tesla", "Blue", 2010);

const car2 = new VehiculCuPetrol("Audy", "green", 2020, 100, 50);
