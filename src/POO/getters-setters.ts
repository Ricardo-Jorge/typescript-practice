export class Person {
  constructor(
    private _name: string,
    private _lastName: string,
    private _age: number,
    private _cpf: string
  ) {}

  set cpf(cpf: string) {
    console.log("Setter call");
    this._cpf = cpf;
  }

  get cpf() {
    console.log("Getter call");
    return this._cpf;
  }

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, 0, "000.000.000-00");
  }
}

const person1 = new Person("Ricardo", "Jorge", 35, "000.000.000-00");
const person2 = Person.createPerson("Marianna", "Sousa");
person1.cpf = "111.222.333-44"; // Chamada de Setter
console.log(person1.cpf); // Chamada de Getter

console.log(person1);
console.log(person2);
