interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: "Ricardo",
  sobrenome: "Jorge",
  idade: 35,
};
const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 35,
};

console.log(aluno1, aluno2);

type ObterChavefn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChavefn = (objeto, chave) => objeto[chave];

const animal = {
  tipo: "Canino",
  raça: "Pitbull",
  idade: 5,
};

console.log(obterChave(animal, "raça"));

export class Pessoa<T, U> {
  constructor(nome: T, idade: U) {}
}

const pessoa1 = new Pessoa("Ricardo", 35);
const pessoa2 = new Pessoa(["Ricardo"], { idade: 35 });
const pessoa3 = new Pessoa<string, number>("Ricardo", 35);

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);
pilha.pop();
pilha.mostrarPilha();

while (!pilha.isEmpty()) {
  console.log(pilha.pop());
}

export function unirObjetos<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return Object.assign({}, obj1, obj2);
}

const obj1 = { chave1: "valor1" };
const obj2 = { chave2: "valor2" };

const uniao = unirObjetos(obj1, obj2);
console.log(uniao);

export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
  return retorno;
}

console.log(soma(1, 2, 3, 4, 5));
