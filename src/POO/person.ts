// Super Class
export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number, // com private temos acesso somente na Classe principal
    protected cpf: string // Com protected temos acesso a esse atributo em ambas Classe "Pai" e nas subclasses
  ) {}
  getAge(): number {
    return this.age;
  }

  getCPF(): string {
    return this.cpf;
  }

  getNomeCopmpleto(): string {
    return this.name + " " + this.lastName;
  }
}

export class Student extends Person {
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public classNumber: string
  ) {
    super(name, lastName, age, cpf);
  }

  testFunction(): string {
    console.log("Fazendo algo antes!");
    return super.getNomeCopmpleto();
  }
}
export class Client extends Person {}

const studentOne = new Student("Ricardo", "Jorge", 35, "111.222.333-44", "101");
const clientOne = new Client("Marianna", "Sousa", 33, "111.222.333-23");

console.log(
  "Student " +
    studentOne.getNomeCopmpleto() +
    ", age: " +
    studentOne.getAge() +
    ". CPF: " +
    studentOne.getCPF()
);

studentOne.testFunction();

console.log(studentOne);
