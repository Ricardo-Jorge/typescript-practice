export class Car {
  private engine = new Engine();

  start() {
    this.engine.start();
  }

  accelerate() {
    this.engine.accelerate();
  }

  brake() {
    this.engine.brake();
  }

  stop() {
    this.engine.stop();
  }
}

export class Engine {
  start() {
    console.log("The engine is starting...");
  }

  accelerate() {
    console.log("The engine is accelerating...");
  }

  brake() {
    console.log("The engine is breaking...");
  }

  stop() {
    console.log("The engine has stopped...");
  }
}

const car = new Car();

car.start();
car.accelerate();
car.brake();
car.stop();
