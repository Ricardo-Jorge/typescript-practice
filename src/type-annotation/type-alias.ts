type Idade = number;

type Person = {
  name: string;
  age: number;
  salary: number;
  prefferedColor?: string;
};

type RGBcolor = "Red" | "Green" | "Blue";
type CMYKcolor = "Cyan" | "Magent" | "Yellow" | "Kryan";
type PrefferedColor = RGBcolor | CMYKcolor;

const employee: Person = {
  name: "Ricardo",
  age: 35,
  salary: 13_000,
};

function setColor(person: Person, color: PrefferedColor): Person {
  return { ...person, prefferedColor: color };
}

console.log(setColor(employee, "Blue"));
