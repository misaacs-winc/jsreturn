const isBigNum = function (num) {

    if (num > 100) {
        return true
    }
    else {
        return false;
    }
};

isBigNum(50);
console.log(isBigNum(50));
console.log(isBigNum(1000));
console.log(isBigNum(0));


//Bouncer
const bouncer = function (_personsIn, guest_age, maxCapacity) {
    if (guest_age < 18) {
        return "this is a club for adults";
    }
    else if (_personsIn >= maxCapacity) {
        return "it's too buy snow, come back later";
    }
    else //(guest_age > 18 && _personsIn < maxCapacity - 1) 
    { return "come in"; }
};

console.log(bouncer(180, 26, 200));
console.log(bouncer(180, 35, 180));
console.log(bouncer(50, 15, 160));


//Calculate Average
const average = function (num1, num2, num3, num4, num5) {
    const sum = num1 + num2 + num3 + num4 + num5;
    const mean = sum / 5;
    return mean;
};

console.log(average(10, 5, 0, 9, 109)); // Expected - 26.6
console.log(average(109, 298, 300, 60, 80.8)); // Expected - 169.56
console.log(average(30, 80, 90, 110, 150)); // Expected - 92
