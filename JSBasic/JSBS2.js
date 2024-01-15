// 1. Write a JavaScript program to display the current day and time in the following format.

function current() {
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = new Date();
    let time = `${
        today.getHours() > 12 ? `${today.getHours() - 12} PM` : `${today.getHours()} AM`
    } : ${today.getMinutes()} : ${today.getSeconds()}`;
    return `Today is : ${dayOfWeek[today.getDay()]}\nCurrent time is : ${time}`;
}
console.log(current());

// 2. Write a JavaScript program to print the current window contents.

function printWindowContents() {
    window.print();
}
// printWindowContents();

// 3. Write a JavaScript program to get the current date.

function getCurrentDate() {
    let today = new Date();
    let dd = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    let mm = today.getMonth() < 9 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
    let yyyy = today.getFullYear();
    return `${mm}-${dd}-${yyyy}, ${mm}/${dd}/${yyyy} or ${dd}-${mm}-${yyyy}, ${dd}/${mm}/${yyyy}`;
}
// console.log(getCurrentDate());

// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

function areaOfATriangle(a, b, c) {
    const p = (a + b + c) / 2;
    const S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return S;
}
// console.log(areaOfATriangle(5, 6, 7));

// 5. Write a JavaScript program where the program takes a random integer
// between 1 and 10, and the user is then prompted to input a guess number. The
// program displays a message "Good Work" if the input matches the guess
// number otherwise "Not matched".

function guessNumber(number) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    return number === randomNum ? 'Good Work' : 'Not matched';
}
// console.log(guessNumber(2));

// 6. Write a JavaScript program to compute the sum of the two given integers. If
// the two values are the same, then return triple their sum.

function sum(a, b) {
    return a === b ? 3 * (a + b) : a + b;
}
// console.log(sum(2, 3));
// console.log(sum(2, 2));

// 7. Write a JavaScript program to check a pair of numbers and return true if one of
// the numbers is 50 or if their sum is 50.

function checkPairOfNumbers(a, b) {
    return a === 50 || b === 50 || a + b === 50 ? true : false;
}
// console.log(checkPairOfNumbers(10, 50));

// 8. Write a JavaScript program to create another string from a given string with the
// first character of the given string added to the front and back.

function createAnotherString(string) {
    return string[0] + string + string[0];
}
// console.log(createAnotherString('Hello'));

// 9. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function multiple(number) {
    return number % 3 === 0 || number % 7 === 0;
}
// console.log(multiple(21));

// 10. Write a JavaScript program to find the largest of three given integers.

function largest(a, b, c) {
    return Math.max(a, b, c);
}
// console.log(largest(1, 4, 3));
