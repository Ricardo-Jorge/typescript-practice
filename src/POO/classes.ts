export class Company {
  public readonly name: string; // Long version
  private readonly employees: Employees[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  setEmployees(employees: Employees): void {
    this.employees.push(employees);
  }

  showEmployees(): void {
    for (const employee of this.employees) {
      console.log(employee);
    }
  }
}

export class Employees {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

const firstCompany = new Company("StrugglerDev", "00.111.333/0001-22");
const secondCompany = new Company("Muchachos", "00.111.222/0001-33");

firstCompany.setEmployees(new Employees("Ricardo", "Jorge"));
firstCompany.setEmployees(new Employees("Thiago", "Jorge"));
firstCompany.setEmployees(new Employees("Matheus", "Benvenutti"));
secondCompany.setEmployees(new Employees("Marianna", "Sousa"));

console.log(firstCompany);
console.log(secondCompany);

firstCompany.showEmployees();
