export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this; // this é o proprio objeto (calculadora criada)
  }
  sub(n: number): this {
    this.numero -= n;
    return this;
  }
  div(n: number): this {
    this.numero /= n;
    return this;
  }
  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

const calculadora = new Calculadora(10);
calculadora.add(35).div(2).mul(3).sub(4);

console.log(calculadora);

// Builder - GoF

export class RequestBuilder {
  private method: "get" | "post" | null = null;
  private url: string | null = null;

  setMethod(method: "get" | "post"): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send() {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();

request.setMethod("post").setUrl("https://www.google.com").send();
