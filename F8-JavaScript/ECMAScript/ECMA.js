// Điểm khác nhau:
// 1. Giữa Var / Let, Const: Scope, Hoisting
// 2. Giữa Const / Var, Let: Assignment

// Code block: if else, loop, {}, ...

if(true) {
    const course = 'Javascript basic';
}


// Classes in ECMA 

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    run() {

    }
}

const phpCourse = new Course('PHP', 100);
const jsCourse = new Course('Javascript', 200);

console.log(phpCourse.getName());
console.log(jsCourse);