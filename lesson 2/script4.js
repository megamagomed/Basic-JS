function plus(a, b) {
    return a + b;
}
console.log(plus(1, 5));

function minus(a, b) {
    return a - b;
}
console.log(minus(1, 5));

function multiplication(a, b) {
    return a * b;
}
console.log(multiplication(1, 5));

function division(a, b) {
    return a / b;
}
console.log(division(1, 5));

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case plus:
            console.log(plus(arg1, arg2));
            break;
        case minus:
            console.log(minus(arg1, arg2));
            break;
        case multiplication:
            console.log(multiplication(arg1, arg2));
            break;
        case division:
            console.log(division(arg1, arg2));
            break;

    }
}
mathOperation(1, 2, plus);
mathOperation(1, 2, minus);
mathOperation(1, 2, multiplication);
mathOperation(1, 2, division);