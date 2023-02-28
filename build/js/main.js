"use strict";
// Literal types
let myName;
myName = 'Johnny';
let userName;
userName = 'Keanu';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('hello');
logMsg(add(2, 3));
logMsg('hello1');
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default parameter value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
infinite();
//##########################/ Turotial-3
// let stringgArr = ['one', 'hey', 'Jobayer'];
// let guiters = ['Strat', 'Les Paul', 5150];
// let mixedDate = ['EVH', 1984, true];
// stringgArr[0] = 'Jhon';
// stringgArr.push('hello');
// guiters[0] = 1984;
// guiters.unshift('Jim');
// guiters = stringgArr;
// let test = [];
// let bands: string[] = [];
// bands.push('Van halen');
// // tuple
// let myTuple: [string, number, boolean] = ['Depp', 5, true];
// let mixed = ['John', 1, false];
// mixed = myTuple;
// myTuple[2] = false;
// // objects
// let myObj: object;
// myObj = [];
// console.log(typeof myObj);
// myObj = bands;
// myObj = {};
// const exampleObj = {
//   prop1: 'John',
//   prop2: true,
// };
// exampleObj.prop2 = true;
// // type Guitarist = {
// //     name: string,
// //     active?: boolean,
// //     albums: (string | number)[]
// // };
// interface Guitarist {
//   name?: string;
//   active: boolean;
//   albums: (string | number)[];
// }
// let evh: Guitarist = {
//   name: 'Eddie',
//   active: false,
//   albums: [1984, 5150, 'OU812'],
// };
// let jp: Guitarist = {
//   name: 'Jimmy',
//   active: true,
//   albums: ['I', 'II', 'IV'],
// };
// evh = jp;
// // function
// const greenGuitarist = (guitarist: Guitarist) => {
//   // narrowing
//   if (guitarist) {
//     return `Hello ${guitarist.name?.toUpperCase()}!`;
//   }
//   return 'Hello!';
// };
// console.log(greenGuitarist(jp));
// // enums
// enum Grade {
//   U = 1,
//   D,
//   C,
//   B,
//   A,
// }
// console.log(Grade.U);
/// Tutorial-2
// let myName: string = 'Dep';
// let meaningOfLife: number;
// let isLoading: boolean;
// let album: string | number; // union type
// myName = 'Jobayer';
// meaningOfLife = 42;
// isLoading = true;
// album = 'hello';
// album = 1984;
// const sum = (a: number, b: string) => {
//   return a + b;
// };
// let postId: string | number;
// let isActive: number | boolean | string; // it is also uniton type
// let re: RegExp = /\w+/g;
