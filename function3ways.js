// Three ways to write JS functions

//1. Declaration
function squareUp(num1, num2) {
    squared = (num1 * num1) + (num2 * num2)
    let value = squared * squared;
    return value;
}

console.log(squareUp(4, 16));


//2. Expression
const sumSquared = function (intA, intB) {
    let sq_1 = intA * intA;
    let sq_2 = intB * intB;
    let sum = sq_1 + sq_2
    let result = sum * sum;
    return result;
};

console.log(sumSquared(4, 16));


//3. Arrow function
const numSq = (x, y) => {
    sq = (x * x) + (y * y);
    let finalCal = sq * sq;
    return finalCal;
};

console.log(numSq(4, 16));
