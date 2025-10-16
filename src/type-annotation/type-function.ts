type MapStringCallback = (item: string) => string;

function MapString(array: string[], callbackfn: MapStringCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (typeof item === "string") newArray.push(callbackfn(item));
  }

  return newArray;
}

const abc = ["a", "b", "c"];
const abcMapped = MapString(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);
