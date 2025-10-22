type Adder = {
  (x: number): number;
  (y: number): number;
  (...args: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));

// Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  corpo: string;
  data?: Date;
};

const documento: Documento = {
  titulo: "O titulo",
  corpo: "Texto do documento",
  //data: new Date(),
};

console.log(documento.data?.toDateString() ?? "Ixi, não existe data.");
