"use strict";
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    get getname() {
        return this.name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ManagementDepartment extends Department {
    constructor(admins) {
        super("ManagementDepartment");
        this.admins = admins;
    }
    addAdmins(name) {
        this.admins.push(name);
    }
    get getAdmins() {
        return this.admins;
    }
    set setAdmin(name) {
        this.admins.push(name);
    }
    describe() {
        console.log("name: " + ManagementDepartment.name);
        console.log("Admins: " + this.admins);
    }
    showAdmins() {
        console.log(this.admins);
    }
}
ManagementDepartment.manager = "Sadeeq";
class AccountingDepartment extends Department {
    constructor(admins) {
        super("AccountingDepartment");
        this.admins = admins;
    }
    addAdmins(name) {
        this.admins.push(name);
    }
    describe() {
        console.log(AccountingDepartment.name);
        console.log(this.admins);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        return AccountingDepartment.instance;
    }
}
AccountingDepartment.instance = new AccountingDepartment([]);
const AccDepartment = AccountingDepartment.getInstance();
const AccDepartment2 = AccountingDepartment.getInstance();
AccDepartment.addAdmins("umar");
AccDepartment2.addAdmins("Saddeq");
AccDepartment2.describe();
//# sourceMappingURL=classes.js.map