// 1. Write a JavaScript program to compute the sum of three elements of a given
// array of integers of length 3.

function sumThreeElArr(arr) {
    return arr[0] + arr[1] + arr[2];
}
// console.log(sumThreeElArr([2,3,4]));

// 2. Write a JavaScript program to rotate the elements left in a given array of
// integers of length 3.

function rotateElLeft(arr) {
    return [arr[1], arr[2], arr[0]];
}
// console.log(rotateElLeft([1, 2, 3]));

// 3. Write a JavaScript program to check whether 1 appears in the first or last
// position of a given array of integers. The array length must be larger than or
// equal to 1.

function checkNumberOne(arr) {
    return arr.length >= 1 && (arr[0] === 1 || arr[arr.length - 1] === 1);
}
// console.log(checkNumberOne([2, 3, 4, 5, 1]));

// 4. Write a JavaScript program to check whether the first and last elements are
// the same in a given array of integers of length 3.

function checkFisrtEqualLast(arr) {
    return arr[0] === arr[2];
}
// console.log(checkFisrtEqualLast([2, 3, 2]));

// 5. Write a JavaScript program to reverse the elements of a given array of
// integers of length 3.

function reverseArr(arr) {
    return [arr[2], arr[1], arr[0]];
}
// console.log(reverseArr([2, 3, 4]));

// 6. Write a JavaScript program to find the largest value between the first and last
// elements and set all the other elements to that value. Display the updated array.

function setArrToBigValue(arr) {
    const bigValue = Math.max(...arr.slice(1, -1));
    for (let i = 1; i < arr.length - 1; i++) {
        arr[i] = bigValue;
    }
    return arr;
}
// console.log(setArrToBigValue([1, 2, 3, 4, 5, 6]));

// 7. Write a JavaScript program to create an array taking the middle elements of
// the two arrays of integer and each length 3.

function createMidArray(arr1, arr2) {
    return [arr1[1], arr2[1]];
}
// console.log(createMidArray([1, 2, 3], [4, 5, 6]));

// 8. Write a JavaScript program to create an array by taking the first and last
// elements from a given array of integers. The length must be larger than or equal
// to 1.

function takingFirstLastEl(arr) {
    return arr.length >= 1 && [arr[0], arr[arr.length - 1]];
}
// console.log(takingFirstLastEl([1, 2, 3, 4]));

// 9. Write a JavaScript program to test whether an array of integers of length 2
// contains 1 or 3.

function checkEl(arr) {
    return arr.includes(1) || arr.includes(3);
}
// console.log(checkEl([1, 5]));

// 10. Write a JavaScript program to swap the first and last elements of a given
// array of integers. The array length should be at least 1.

function swapEl(arr) {
    const midEl = arr.slice(1, -1);
    return arr.length >= 1 && [arr[arr.length - 1], ...midEl, arr[0]];
}
// console.log(swapEl([1, 2, 3, 4, 5]));

// 11. Write a JavaScript program to add two digits to a given positive integer of
// length two.

function addTwoDigits(number) {
    let strNum = number.toString();
    return strNum.length === 2 && Number(strNum[0]) + Number(strNum[1]);
}
// console.log(addTwoDigits(35));

// 12. Write a JavaScript program to add two positive integers without carrying.

function addWithoutCarrying(num1, num2) {
    let result = 0;
    let n = 1;
    while (num1 > 0 || num2 > 0) {
        result += (((num1 % 10) + (num2 % 10)) % 10) * n;
        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
        n *= 10;
    }
    return result;
}
// console.log(addWithoutCarrying(222, 999));

// 13. Write a JavaScript program to find the longest string from a given array of
// strings.

function findLongestString(arr) {
    const elLengtgArr = arr.map((el) => el.length);
    return arr.filter((el) => el.length === Math.max(...elLengtgArr));
}
// console.log(findLongestString(['nguyen', 'nhat', 'ninh']));

// 14. Write a JavaScript program to replace each character in a given string with
// the next in the English alphabet.
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

function replaceCharacter(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== 'z' && str[i] !== 'Z') {
            newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        } else {
            str[i] === 'z' && (newStr += 'a');
            str[i] === 'Z' && (newStr += 'A');
        }
    }
    return newStr;
}
// console.log(replaceCharacter('NInhza'));

// 15. Write a JavaScript program to determine if two arrays of integers of the same
// length are similar. The arrays will be similar if one array can be obtained from
// another array by swapping at most one pair of elements.

function similarArr(arr1, arr2) {
    let sameEl = arr1.length === arr2.length && arr1.every((el) => arr2.includes(el));
    let count = 0;
    if (sameEl) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                count += 1;
            }
        }
    }
    return count > 2 ? false : sameEl;
}
// console.log(similarArr([1, 2, 3, 4], [4, 2, 3, 1]));

// 16. Write a JavaScript program that takes two integers and a divisor. If the given
// divisor divides both integers and does not divide either, two specified integers are
// similar. Check whether two integers are similar or not.

function isSimilar(num1, num2, divisor) {
    return (num1 % divisor === 0 && num2 % divisor === 0) || (num1 % divisor !== 0 && num2 % divisor !== 0);
}
// console.log(isSimilar(10, 6, 2));

// 17. Write a JavaScript program to find the maximum difference among all
// possible pairs of a given array of integers.

function maximumDifference(arr) {
    return Math.max(...arr) - Math.min(...arr);
}
// console.log(maximumDifference([1, 3, 8, 23, 11]));

// 18. Write a JavaScript program to find the number appearing most frequently in a
// given array of integers.

function findNum(arr) {
    let map = new Map();
    let maxCount = 0;
    let result;
    for (let i = 0; i < arr.length; i++) {
        let count = (map.get(arr[i]) || 0) + 1;
        map.set(arr[i], count);
        if (count > maxCount) {
            maxCount = map.get(arr[i]);
            result = arr[i];
        }
    }
    return result;
}
// console.log(findNum([1, 1, 2, 3, 1]));

// 19. Write a JavaScript program to replace all numbers with a specified number in
// an array of integers.

function replaceArr(arr, num) {
    let newArr = arr.map((_) => num);
    return newArr;
}
// console.log(replaceArr([1, 1, 2, 3], 5));
