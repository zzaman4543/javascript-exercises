const sumAll = function(num1, num2) {
    if (!((Number.isInteger(num1) && num1 > 0) && (Number.isInteger(num2) && num2 > 0))) {
        return 'ERROR';
    }

    let biggerNum;
    let smallerNum;

    if (num1 > num2) {
        biggerNum = num1;
        smallerNum = num2;
    } else {
        biggerNum = num2;
        smallerNum = num1;
    }

    let sum = i = smallerNum;

    while (i < biggerNum) {
        sum += ++i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
