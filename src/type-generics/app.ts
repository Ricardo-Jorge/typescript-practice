type MeuTipo = number;

const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<MeuTipo> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((result) => console.log(result + 1));
minhaPromise().then((result) => console.log(result + 1));
