// 1. Write a JavaScript program to reverse a given string.

function reverseString(str) {
    return str.split('').reverse().join('');
}
// console.log(reverseString('hello world'));

// 2. Write a JavaScript program to replace every character in a given string with
// the character following it in the alphabet.

function replaceNextChar(str) {
    let newStringArr = [];
    for (let i = 0; i < str.length; i++) {
        newStringArr.push(String.fromCharCode(str.charCodeAt(i) + 1));
    }
    return newStringArr.join('');
}
// console.log(replaceNextChar('Hello, World!'));

// 3. Write a JavaScript program to capitalize the first letter of each word in a given string.

function upperFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// console.log(upperFirstLetter('hello, world!'));

// 4. Write a JavaScript program to convert letters of a given string alphabetically.

function convertLetter(str) {
    let newStringArr = str.split('');
    newStringArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    return newStringArr.join('');
}
// console.log(convertLetter('hello world'));

// 5. Write a JavaScript program to count the number of vowels in a given string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        vowels.includes(str[i]) && (count += 1);
    }
    return count;
}
// console.log(countVowels('hello world'));

// 6. Write a JavaScript program to create one string of specified copies (positive
//     numbers) of a given string.

function createCoppies(str, number) {
    return number > 0 ? str.repeat(number) : 'error';
}
// console.log(createCoppies('hello', 2));

// 7. Write a JavaScript program to divide two positive numbers and return the
// result as string with properly formatted commas.

function toString(a, b) {
    const result = b > 0 && (a / b).toLocaleString('en');
    return result;
}
// console.log(toString(10000, 3));

// 8. Write a JavaScript program to extract the first half of a even string.

function extractFirstHalf(str) {
    const strToArr = str.split('');
    const firstHalf = strToArr.splice(0, str.length / 2).join('');
    return firstHalf;
}
// console.log(extractFirstHalf('ninh'));

// 9. Write a JavaScript program to create a new string without the first and last
// characters of a given string.

function cutFirstLast(str) {
    return str.slice(1, -1);
}
// console.log(cutFirstLast('nninhh'));

// 10. Write a JavaScript program to concatenate two strings except for their first character.

function concatString(str1, str2) {
    return str1.slice(1) + str2.slice(1);
}
// console.log(concatString('hni', 'inh'));

// 11. Write a JavaScript program to move the last three characters to the start of a
// given string. The string length must be greater than or equal to three.

function moveLastThreeCharacter(str) {
    return str.slice(-3) + str.slice(0, -3);
}
// console.log(moveLastThreeCharacter('hnin'));

// 12. Write a JavaScript program to concatenate two strings and return the result. If
// the length of the strings does not match, then remove the characters from the
// longer string.

function concatTwoString(str1, str2) {
    if (str1.length === str2.length) {
        return str1 + str2;
    } else {
        return str1.length > str2.length ? str1.slice(0, str2.length) + str2 : str1 + str2.slice(0, str1.length);
    }
}
// console.log(concatTwoString('hello', 'ninh'));

// 13. Write a JavaScript program to test whether a string ends with "Script". The
// string length must be greater than or equal to 6.

function checkScript(str) {
    return str.length >= 6 && str.slice(-6) === 'Script';
}
// console.log(checkScript('nScript'));

// 14. Write a JavaScript program to display the city name if the string begins with
// "Los" or "New" otherwise return blank.

function checkCityName(str) {
    return str.includes('Los') || str.includes('New') ? str : '';
}
// console.log(checkCityName('New York'));

// 15. Write a JavaScript program to create a new string using the first and last n
// characters from a given string. The string length must be larger than or equal to
// n.

function newString(str, n) {
    const result = str.slice(0, n) + str.slice(-n);
    return str.length >= n && result;
}
// console.log(newString('hello', 2));
