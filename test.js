class Person {
    constructor(firstname, lastName, age) {
        this.firstname = firstname,
            this.lastName = lastName,
            this.age = age
    }

    Inro() {
        console.log(`Hello am ${this.firstname}   ${this.lastName}  am ${this.age} years old parent`);
        return this
    }

}

class Admin extends Person {
    constructor(firstname, lastName, age, level) {
        super(firstname, lastName, age,)
        this.level = level
    }

    lev() {
        console.log(`am ${this.firstname} and am at level ${this.level}`);
        return this
    }
    // Inro() {
    //     console.log(`Hello am ${this.firstname}   ${this.lastName}  am ${this.age} years old parent  and am at level ${this.level}  child`);
    //     return this
    // }

}

const Admin1 = new Admin("sdqumar", "umar", 24, 10)

// Admin1.Inro()

const person = { fname: "John", lname: "Doe", age: 25 };

let txt = "";
for (let x of person) {
    console.log(x);
}

// function User(firstname, lastName, age) {
//          this.firstname = firstname,
//         this.lastName = lastName,
//         this.age = age

// }

// User.prototype.into = function () {
//     console.log(`Hello am ${this.firstname}   ${this.lastName}  am ${this.age} years old`);
//     return this
// }

// const user1 = new User("sadeeq", "umar", 24)

// user1.into()