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

// // const perso1 = new Person();
