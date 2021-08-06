a = +prompt("Введите число a");
b = +prompt("Введите число b");
if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}
