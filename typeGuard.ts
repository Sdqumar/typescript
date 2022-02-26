type combinable = string | number;

// function add(value1: combinable, value2: combinable) {
//   if (typeof value1 === "number" && value2 === "number") {
//     return value1 + value2;
//   }
//   return;
// }

interface Employee {
  type: "employee";
  name: string;
  level: number;
}
interface Admin {
  type: "admin";
  privilages: string[];
}

type UnKnowEmployee = Employee | Admin;

// Discriminated unions
function printEmployeesInfo(employee: UnKnowEmployee) {
  if ("privilages" in employee) {
    console.log(employee.privilages);
  } else {
    console.log(employee.name, employee.level);
  }
}

function printEmployeesInfo2(employee: UnKnowEmployee) {
  switch (employee.type) {
    case "admin":
      console.log(employee.privilages);
      break;
    case "employee":
      console.log(employee.name, employee.level);
      break;
  }
}
