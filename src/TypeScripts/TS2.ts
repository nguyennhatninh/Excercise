// 1
let result: string | number;
function checkType(a: number | string | boolean) {
    console.log(typeof a);
}
// checkType(1);

// 2
function combine(a: number, b: boolean): number | boolean {
    return b || a;
}
// console.log(combine(2, true));

// 3
interface Car {
    make: string;
    model: string;
}
type Bus = {
    make: string;
    model: string;
    payloadCapacity: number;
};
type Vehicle = Car | Bus;

// 4
function checkTypeArg(arg: string | number) {
    if (typeof arg === 'string') {
        console.log('this is a string');
    } else {
        console.log('this is a number');
    }
}
// checkTypeArg(2);

// 5
function checkNumber(num: number): boolean {
    return num % 2 === 0 ? false : true;
}
// console.log(checkNumber(3));

// 6
const arr: (number | string | boolean)[] = ['ninh', 2, true, false, true, 'tai', 98, 104];

const numArr: number[] = arr.filter((item): item is number => typeof item === 'number');
const stringArr: string[] = arr.filter((item): item is string => typeof item === 'string');
const booleanArr: boolean[] = arr.filter((item): item is boolean => typeof item === 'boolean');

// console.log(numArr, booleanArr, stringArr);

// 7
const anyValue: any = 'this is type any';
const stringValue: string = anyValue as string;
// console.log(typeof stringValue, stringValue);

// 8
function printLengthStr(arg: string | string[]): number {
    if (typeof arg === 'string') {
        return arg.length;
    } else {
        return arg.join('').length;
    }
}
// console.log(printLengthStr(['ninh', 'nguyen', 'nhat']));
