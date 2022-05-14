const listOfNumber = [1, 2, 3, 4, 5];
const listOfName = ['Luan', 'Duy', 'Khang', 'Danh Huy'];

console.log(listOfNumber[1]);
console.log(listOfNumber.length);
console.log(listOfName[1]);
listOfNumber.push(6);
listOfNumber.push(7);
console.log(listOfNumber);

const item = listOfNumber.pop();
console.log(item);
console.log(listOfNumber);

const listOfCar = {
    name: "BWM",
    speed: 200,
    type: 'car',
}

console.log(Object.keys(listOfCar));
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
console.log(typeof listOfNumber);

const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
console.log(score.visitors);
var foo;
foo = function (a, b, c) {
    console.log("Hello world :", a , " ", b, " ", c);
};
foo(1, 2, 3);  // TypeError: undefined is not a function
foo.apply(null, [1, 2, 3]);

function add(x, y, z) {
    return x + y + z;
}
var plus1 = add.bind(null, 1);
console.log(plus1(5, 4));

function logArgs(arguments) {
    for (var i=0; i<arguments.length; i++) {
        console.log(i+'. '+arguments[i]);
    }
}

logArgs([1, 2, 3, 4, 5, 6, 7]);

for (let i in listOfName) {
    console.log(listOfName[i]);
}

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(" "));
// → Secretarybirds. specialize. in. stomping


