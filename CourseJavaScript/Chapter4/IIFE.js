!function () { // open IIFE
    // inside IIFE

    console.log("IIFE");
}(); // close IIFE

var File = function () { // open IIFE
    var UNTITLED = 'Untitled';
    function File(name) {
        this.name = name || UNTITLED;
    }
    return File;
}();

var setValue = function (value) {
    var prevValue = "Khang";
    return function () { // define setValue
        if (value != prevValue) {
            console.log('Changed: ' + value);
            prevValue = value;
        }
    };
}("Luan");

this.name = "Luan"
console.log(this.name);

