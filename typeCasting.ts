// const username = <HTMLInputElement>document.getElementById("username");
const username = document.getElementById("username") as HTMLInputElement;
username.value = "hello";

//Index properties
interface Form {
  [prop: string]: string | number;
}

const loginForm: Form = {
  username: "",
  password: 1221,
};

type Combinable = string | number;

//function overload
// function add(value1: string, value2: string): string;
// function add(value1: number, value2: number): number;
// function add(value1: Combinable, value2: Combinable) {
//   if (typeof value1 === "number" && value2 === "number") {
//     return value1 + value2;
//   }
//   return;
// }

// const res = add(2, 2);
