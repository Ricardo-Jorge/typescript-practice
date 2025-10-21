export class Writter {
  private tool: Tool | null = null;
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  setTool(tool: Tool) {
    this.tool = tool;
  }

  write() {
    if (this.tool === null) {
      console.log("I cannot work without a tool.");
      return;
    }
    console.log(
      `The writer ${this._name} is using his ${this.tool.getName()} to work.`
    );
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  getName() {
    return this._name;
  }

  abstract write(): string;
}

export class Pen extends Tool {
  write(): string {
    return this.getName() + " is writing!";
  }
}
export class TypeMachine extends Tool {
  write(): string {
    return this.getName() + " is writing!";
  }
}

const writer = new Writter("Ricardo");
const pen = new Pen("Bic");
const typeMachine = new TypeMachine("Type Machine");

writer.setTool(pen);
writer.write();
console.log(pen.write());
console.log(typeMachine.write());
