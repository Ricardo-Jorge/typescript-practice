export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string
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

export class Student extends Person {}
export class Client extends Person {}

const studentOne = new Student("Ricardo", "Jorge", 35, "111.222.333-44");
const clientOne = new Client("Marianna", "Sousa", 33, "111.222.333-23");

console.log(
  "Student " +
    studentOne.getNomeCopmpleto() +
    ", age: " +
    studentOne.getAge() +
    ". CPF: " +
    studentOne.getCPF()
);
