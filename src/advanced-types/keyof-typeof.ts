type colorsObj = typeof colorsObj;
type colorsKeys = keyof colorsObj;

const colorsObj = {
  vermelho: "red",
  azul: "blue",
  verde: "green",
  roxo: "purple",
};

function traduzirCor(color: colorsKeys, colors: typeof colorsObj) {
  return colors[color];
}

console.log(traduzirCor("vermelho", colorsObj));
console.log(traduzirCor("azul", colorsObj));
console.log(traduzirCor("roxo", colorsObj));

// Espelhamento

type veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: veiculo["marca"];
  year: veiculo["ano"];
};

const newCar: Car = {
  brand: "ford",
  year: 1995,
};

console.log(newCar);
