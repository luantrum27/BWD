var res = "";
var i = 1, j = 1;
for (i = 1; i <= 7; i++) {
    for (j = 1; j <= i; j++) {
        res += '#';
    }
    res += '\n';
}

console.log(res);

