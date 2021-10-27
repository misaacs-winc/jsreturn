const ageCheck = function (_age) {
    if (_age >= 18) {
        return true;
    }
    return false;
};

const isAdult = function (_age) {
    if (ageCheck(_age) == true) {
        return "Hello there";
    }
    return "Hey Kiddo";

};

console.log(isAdult(23));
console.log(isAdult(13));



//VAT execersise 1
const calVAT = function (basePrice, VATPercent) {
    return basePrice * (VATPercent / 100);
};

const grossTotal = function (basePrice, VATPercent) {
    const vatRate = calVAT(basePrice, VATPercent);
    return basePrice + vatRate;
};

console.log(grossTotal(1210, 21));  // 1464.1
console.log(grossTotal(870, 5));    // 913.5



// VAT exeercise 2
const calBasePrice = function (grossAmount, VATPercent) {
    const basePrice = grossAmount / ((100 + VATPercent) / 100);
    return basePrice;
};

const grossSale = function (grossAmount, VATPercent) {
    const basePrice = calBasePrice(grossAmount, VATPercent);
    const vatRate = grossAmount - basePrice;
    return [basePrice, vatRate];
};

console.log(grossSale(1464.1, 21)); // [1210, 254.0999999999999] [[Prototype]]: Array(0) length:2
console.log(grossSale(913.5, 5)); // [870, 43.5] [[Prototype]]: Array(0) length:2