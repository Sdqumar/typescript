"use strict";
function printEmployeesInfo(employee) {
    if ("privilages" in employee) {
        console.log(employee.privilages);
    }
    else {
        console.log(employee.name, employee.level);
    }
}
function printEmployeesInfo2(employee) {
    switch (employee.type) {
        case "admin":
            console.log(employee.privilages);
            break;
        case "employee":
            console.log(employee.name, employee.level);
            break;
    }
}
//# sourceMappingURL=typeGuard.js.map