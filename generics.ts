const names: Array<string> = ["sadeeq", "umar"];
// const names:string[] = ['sadeeq','umar']

const data: Promise<string> = new Promise((resolve, reject) => {
  try {
    resolve("sadeeq");
  } catch (error) {
    reject("error");
  }
});

data.then((data) => data.trim());
const target = { a: "saddeq", b: ["fd"] };
const source = { b: 4, c: 5 };

// generics Constraints
function merge<U extends string[] | object>(a: any, b: U) {
  return Object.assign(a, b);
}
const res = merge(target, source);

interface lengthy {
  length: number;
}

function countAndDescribe<T extends lengthy>(element: T) {
  if (element.length > 1) {
    return `we got  ${element.length} element`;
  }
  return `we got no element`;
}

// console.log(countAndDescribe("saddeq"));
// console.log(countAndDescribe(["saddeq", ["yoshi"]]));

//keyof Constraints
function extractProperty<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(extractProperty(["saddeq", 23], 5));

extractProperty(["saddeq", 23], 5);
extractProperty({ name: "saddeq" }, "name");
