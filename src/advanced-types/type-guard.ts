export function add(a: unknown, b: unknown): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}

console.log(add(1, 5));
console.log(add("1", "5"));

type Person = { tipo: "person"; name: string };
type Animal = { tipo: "animal"; breed: string };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  constructor(public name: string) {}
  tipo: "person" = "person";
}

function showProperties(obj: PersonOrAnimal): void {
  // if ("name" in obj) console.log(obj.name);
  // if (obj instanceof Student) console.log(obj.name);

  switch (obj.tipo) {
    case "person":
      console.log(obj.name);
      break;
    case "animal":
      console.log("That´s a animal,", obj.breed);
      break;
  }
}

console.log(showProperties(new Student("Ricardo")));
console.log(showProperties({ tipo: "animal", breed: "Canine" }));
