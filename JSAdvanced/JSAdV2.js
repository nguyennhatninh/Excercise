// 1. Write a JavaScript program to check whether two numbers are in the range
// 40..60 or 70..100 inclusive.

function checkNum(num1, num2) {
    return (
        (num1 > 40 && num1 < 60) || (num1 > 70 && num1 < 100) || (num2 > 40 && num2 < 60) || (num2 > 70 && num2 < 100)
    );
}
// console.log(checkNum(45, 85));

// 2. Write a JavaScript program to find the largest number from the two given
// positive integers. The two numbers are in the range 40..60 inclusive.

function largestNumber(num1, num2) {
    return num1 > 40 && num1 < 60 && num2 > 40 && num2 < 60 ? Math.max(num1, num2) : 'not range 40..60';
}
// console.log(largestNumber(45, 55));

// 3. Write a JavaScript program that checks whether the last digit of three positive
// integers is the same.

function checkLastDigit(num1, num2, num3) {
    return num1.toString()[-1] === num2.toString()[-1] && num1.toString()[-1] === num3.toString()[-1];
}
// console.log(checkLastDigit(45, 5, 115));

// 4. Write a JavaScript program to compute the sum of the two given integers. If
// the sum is in the range 50..80 return 65 otherwise return 80.

function sum(num1, num2) {
    let sum = num1 + num2;
    return sum > 50 && sum < 80 ? 65 : 80;
}
// console.log(sum(35, 20));

// 5. Write a JavaScript program to check from two given integers whether one of
// them is 8 or their sum or difference is 8.

function checkEqual8(num1, num2) {
    return num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8;
}
// console.log(checkEqual8(8, 16));
