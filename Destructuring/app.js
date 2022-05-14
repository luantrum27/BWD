// var array = ['Javascript', 'PHP', 'Ruby'];

// var [a, ...rest] = array; 

// console.log(a);
// console.log(rest);


// var course = {
//     name: 'Javascript',
//     price: 1000
// };

// var {name, price} = course;
// console.log(name, price);

// function logger(...params) {
//     console.log(params);
// }

// console.log(logger(1, 2, 3, 4, 5, 6, 7, 8));

var array1 = ['ReactJS', 'Ruby'];
var array2 = ['C++', 'Python', 'Java', 'JavaScript', 'Lavarel'];
var array3 = [...array1, ...array2];
var object1 = {
    name: 'Javascript'
};

var object2 = {
    price: 1000
};

var object3 = {
    ...object1,
    ...object2
};


var array4 = array2.splice(2, 0, 'ReactJs', 'Ruby');
console.log(array4);

// console.log(object3);

// MODULES

