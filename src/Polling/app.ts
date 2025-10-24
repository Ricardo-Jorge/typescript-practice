export class Poll {
  private readonly candidateLanguages: ProgrammingLanguages[] = [];

  addToPoll(candidateLanguage: ProgrammingLanguages) {
    this.candidateLanguages.push(candidateLanguage);
  }

  showResult() {
    for (const candidateLanguage of this.candidateLanguages) {
      console.log(
        `Programming Language ${candidateLanguage.languageName} received: ${candidateLanguage.numberOfVotes}`
      );
    }
  }
}

export class ProgrammingLanguages {
  public numberOfVotes: number = 0;
  constructor(public languageName: string) {}
  public voters: Voter[] = [];

  addVote(voter: Voter) {
    this.voters.push();
    this.numberOfVotes++;
  }
}

export class Voter {
  public language!: ProgrammingLanguages;
  constructor(
    public name: string,
    public lastName: string,
    public votterId: number
  ) {}
}

const poll = new Poll();

const voter1 = new Voter("Ricardo", "Jorge", 1);
const voter2 = new Voter("Marianna", "Sousa", 2);
const voter3 = new Voter("Matheus", "Costa", 3);
const voter4 = new Voter("Alan", "Santos", 4);

const javascript = new ProgrammingLanguages("Javascript");
const python = new ProgrammingLanguages("Python");
const node = new ProgrammingLanguages("Node");
const java = new ProgrammingLanguages("Java");

javascript.addVote(voter1);
javascript.addVote(voter1);
javascript.addVote(voter1);
python.addVote(voter2);
python.addVote(voter2);
java.addVote(voter3);
java.addVote(voter3);
java.addVote(voter3);
java.addVote(voter3);
node.addVote(voter4);
node.addVote(voter4);
node.addVote(voter4);
node.addVote(voter4);
node.addVote(voter4);
node.addVote(voter4);

poll.addToPoll(javascript);
poll.addToPoll(python);
poll.addToPoll(node);
poll.addToPoll(java);

poll.showResult();
