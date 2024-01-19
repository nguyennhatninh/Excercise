// 1
const name: string = 'ninh';
const age: number = 23;
// console.log(name, age);

// 2
// x = 1;
// var x: number;
// console.log(x);
// {
//     x = 2;
//     console.log(x);
// }

// let y: number = 3;
// console.log(y);
// {
//     y = 4;
//     console.log(y);
// }

// const z: number = 5;
// console.log(z);

// 3
const num: number = 22;
const str: string = 'ninh';
const bool: boolean = false;
const undef: undefined = undefined;

// console.log(num + 1);
// console.log(str.charAt(0));
// console.log(!bool);
// console.log(undef === undefined);

// 4
let num4: number = 4;
// num4 = 'ninh'; // Type 'string' is not assignable to type 'number'.
// console.log(num4);

// 5
let num5 = 5;
// num5 = 'five'// Type 'string' is not assignable to type 'number'.
let str5 = 'five';
// str5 = 5 // Type 'number' is not assignable to type 'string'.
// console.log(typeof num5 ,typeof str5 );

// 6
let numStr: string = '22';
let num6: number = parseInt(numStr);

// 7
type Point = { x: number; y: number };
type Circle = {
    point: Point;
    radius: number;
};
let point: Point = { x: 0, y: 0 };
let circle: Circle = { point: point, radius: 10 };
// console.log(circle);

// 8
const numArr: number[] = [1, 2, 3, 4, 5, 6];
numArr.push(7);
// console.log(numArr);
numArr.pop();
// console.log(numArr);
// console.log(numArr.map((item) => item + 1));

// 9
enum Color {
    Red,
    Green,
    White,
    Blue,
}
const selectColor: Color = Color.Green;
// console.log(selectColor);

// 10
const isNull: null = null;
const isUndefined: undefined = undefined;
