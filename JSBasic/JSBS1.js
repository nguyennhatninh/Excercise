// bt tìm số chẵn
function getEvenNumber(n) {
    const result = [];
    for (let i = 1; i < n; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }
    return result;
}
// console.log(getEvenNumber(5));

// BT lấy ra các giá trị k lặp lại
// Cách giải thông thường
// function checkUniqueValues(arr){
// const checkValuesUnique = [];
// for(let i = 0; i < arr.length; i++){
//     if(!checkValuesUnique.includes(arr[i])){
//         checkValuesUnique.push(arr[i]);
//     }
// }
// return checkValuesUnique
// }
// console.log(checkUniqueValues([1,1,2,3,3,5]));
// Cách giải sử dụng Set
function checkUniqueValues(arr) {
    const checkValuesUnique = new Set(arr);
    return [...checkValuesUnique];
}
// console.log(checkUniqueValues([1, 1, 2, 3, 3, 5]));
// BT lấy ra các giá trị lặp lại
// Cách giải thông thường
// function checkRepeatValue(arr){
// const checkValue = [];
// const checkValueRepeat = [];
// for(let i = 0; i < arr.length; i++){
//     if(!checkValue.includes(arr[i])){
//         checkValue.push(arr[i]);
//     }else{
//         if(!checkValueRepeat.includes(arr[i])){
//         checkValueRepeat.push(arr[i]);
//         }
//     }
// }
// return checkValueRepeat
// }
// console.log(checkRepeatValue([1,1,2,3,3,5,3,3,3]));
// Cách giải sử dụng Map
function checkRepeatValue(arr) {
    const map = new Map();
    const checkValueRepeat = [];
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            if (map.get(arr[i]) === 1) {
                checkValueRepeat.push(arr[i]);
            }
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    return checkValueRepeat;
}
// console.log(checkRepeatValue([1, 1, 2, 3, 3, 5, 3, 3, 3]));
