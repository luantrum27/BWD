const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
    unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(5);
const square1 = (x) => { return x * x; };
const square2 = x => x * x;

console.log(square1(5));
console.log(square2(6));

function greet(who) {
    console.log("Hello " + who);
    }
    greet("Harry");
    console.log("Bye");

function Y() { 
    for(var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 3000);
    }
}

function X() {
    console.log(color);
    var color = "yellow";
}

function Z() {
    var color;
    console.log(color);
    color = "yellow";
}


function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));

function wrapValue(n) {
let local = n;
return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(2));

function lastName(lastName) {
    makeFullName = () => {
        return "Last Name Of You: " + lastName;
    }
    return makeFullName();
}

console.log(lastName("Hello"));

function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // Đây là hàm bên trong mà có thể truy cập đến biến của hàm bên ngoài, truy cập được tham số của hàm ngoài.
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}