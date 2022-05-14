// 3 công việc của EOL
// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

var name = 'Javascript';
var price = 1000;

var fieldName = 'name';
var fieldPrice = 'price';

const course = {
    name,
    price,
    getName() {
        return this.name;
    },
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
};

console.log(course.getName());

// Default parameter values trong javascript ES6

function logger(log, isAlert, type = 'log') {
    if(isAlert) return alert(log)
    else console[type](log);
}

logger("Hello world", false, 'error');

// Destructuring trong javascript ES6

var array = ['Javascript', 'PHP', 'Ruby'];

var [a, , c] = array;

console.log(a, c);

// Toán tử Rest (Lấy ra các element còn lại)

var [...rest] = array;
// console.log(a);
console.log(rest);

var {name: parentName, children: { name }} = course;
console.log(parentName);

function run(...params) {
    console.log(params.join(' '));
}

run(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);

// Spread

var arr = ['Javascript', 'Ruby', 'PHP'];
var arr1 = ['ReactJS', 'Dart'];
var arr3 = [...arr1, ...arr];
console.log(arr3);
var object1 = {
    name: 'Javascript'
};

var object2 = {
    price: 1000
}

var object3 = {
    ...object1,
    ...object2
}

console.log(object3);

var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: 'other'
}

var exerciseConfig = {
    ...defaultConfig,
    api: 'https://domain-trang-bai-tap'
}

var array1 = ['Javascript', 'PHP', 'Ruby'];

function logger(a, b) {
    console.log(a, b);
}

logger(...array1);

// Tagged template literals

function hightlight([first, ...strings], ...values) { 
    console.log(first);
    console.log(strings);
    console.log(values);
    console.log(rest);
}
var brand = 'F8';
var new__course = 'Javascript';
const html = hightlight`Học lập trình ${new__course} tại ${brand}`;

