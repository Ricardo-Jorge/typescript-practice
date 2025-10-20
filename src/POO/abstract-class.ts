export class Character {
  constructor(
    protected name: string,
    protected power: number,
    protected deffense: number,
    protected life: number,
    public status: Status
  ) {}

  attack(character: Character) {
    if (this.status === Status.DEAD) return console.log("Game Over");
    console.log(`${this.name} is attacking...\n`);
    this.checkWhoIsStronger(character);
  }

  checkWhoIsStronger(character: Character) {
    if (this.power > character.deffense) {
      character.decreaseLife(this.power - character.deffense);
    } else {
      console.log(`${character.name} blocked the attack\n`);
    }
  }

  decreaseLife(value: number) {
    console.log(`${this.name} is being attacked...\n`);
    this.life -= value;
    if (this.life <= 0) {
      this.status = Status.DEAD;
      return console.log(`${this.name} is defeated.`);
    }
    console.log(`${this.name} has ${this.life} life remaining.\n`);
  }
}

enum Status {
  "ALIVE",
  "DEAD",
}

export class Warrior extends Character {}
export class Monster extends Character {}

const kratos = new Warrior("Kratos", 400, 250, 1000, Status.ALIVE);
const sphinx = new Warrior("Sphinx", 240, 199, 750, Status.ALIVE);

kratos.attack(sphinx);
sphinx.attack(kratos);

kratos.attack(sphinx);
sphinx.attack(kratos);

kratos.attack(sphinx);
sphinx.attack(kratos);

kratos.attack(sphinx);
sphinx.attack(kratos);
