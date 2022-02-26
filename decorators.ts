// function Logger(logString: string) {
//   return function (constructor: Function) {
//     const header = document.getElementById("header");
//     header!.innerHTML = "JavaScript";
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// @Logger("log person object")
// class Person {
//   name = "Saddeq";
//   constructor() {
//     console.log("person object...");
//   }
// }

// const perso1 = new Person();
// function withTemplete(template: string, hookId: string) {
//   return function (constructor: any) {
//     const header = document.getElementById(hookId);
//     const p = new constructor();
//     if (header) {
//       header.innerHTML = template;
//       header.textContent = p.name;
//     }
//   };
// }

// @withTemplete("<h6>SUmar</h6>", "header")
// class Person {
//   name = "Saddeq";
//   constructor() {
//     console.log("person object...");
//   }
// }

// const perso1 = new Person();

function Log(target: any, PropertyName: string) {
  console.log("property decoratoe");
  console.log(target, PropertyName);
}
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("methode Decoratot");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
class Product {
  @Log
  store: string;
  constructor(s: string, private title: string, private _price: number) {
    this.store = s;
  }

  set price(value: number) {
    if (value <= 0) throw new Error("invalid price - should be positive!");
    this._price = value;
  }

  get priceValue() {
    return `${this.title} ${this._price}`;
  }
  @Log2
  getProductTax(tax: number) {
    return this._price * (1 * tax);
  }
}

// const mango = new Product("mango", 200);
// mango.price = 2;
// console.log(mango.priceValue);
