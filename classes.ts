abstract class Department {
  protected employees: string[] = [];

  constructor(private readonly name: string) {}

  get getname() {
    return this.name;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeesInfo(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ManagementDepartment extends Department {
  // private id: string = "1232ds23sd";
  constructor(private admins: string[]) {
    super("ManagementDepartment");
  }

  addAdmins(name: string) {
    this.admins.push(name);
  }

  static readonly manager: string = "Sadeeq";

  get getAdmins() {
    return this.admins;
  }
  set setAdmin(name: string) {
    this.admins.push(name);
  }
  describe(this: ManagementDepartment) {
    // super.describe();
    console.log("name: " + ManagementDepartment.name);
    console.log("Admins: " + this.admins);
  }
  showAdmins(this: ManagementDepartment) {
    console.log(this.admins);
  }
}

class AccountingDepartment extends Department {
  private constructor(private admins: string[]) {
    super("AccountingDepartment");
  }
  addAdmins(name: string) {
    this.admins.push(name);
  }
  describe(this: AccountingDepartment): void {
    console.log(AccountingDepartment.name);
    console.log(this.admins);
  }
  private static instance = new AccountingDepartment([]);

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    return AccountingDepartment.instance;
  }
}
const AccDepartment = AccountingDepartment.getInstance();
const AccDepartment2 = AccountingDepartment.getInstance();
AccDepartment.addAdmins("umar");
AccDepartment2.addAdmins("Saddeq");
AccDepartment2.describe();
// let MGDepartment = new ManagementDepartment(["saddeq", "umar"]);
// ManagementDepartment.manager = "umar";
// console.log(ManagementDepartment.manager);
// MGDepartment.describe();
// MGDepartment.setAdmin = "new";
// console.log(MGDepartment.getAdmins);

// MGDepartment.addAdmins("Mubi");
// MGDepartment.addEmployee("sdqumar");
// MGDepartment.printEmployeesInfo();
// MGDepartment.showAdmins();
// let healthEducation = new Department("Health Education");
// healthEducation.addEmployee("Saddeq");
// healthEducation.addEmployee("Umar");
// healthEducation.addEmployee("Mubi");
// // healthEducation.employees = [];
// healthEducation.printEmployeesInfo();
// healthEducation.describe();

// const healthEducation2 = {
//   name: "Health Promotion",
//   describe: healthEducation.describe,
// };
// healthEducation2.describe();
// healthEducation.describe();
// const hobbies = {
//   name: "saddeq",
//   log() {
//     console.log(this.name);
//     return;
//   },
// };
