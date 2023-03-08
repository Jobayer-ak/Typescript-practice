//############################# Tutorial - 8
//generics

const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false))
console.log(isTrue(0));
console.log(isTrue(1));
console.log(isTrue("Dave"))
console.log(isTrue(""))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({}))
console.log(isTrue({ name: "Dave" });
console.log(isTrue([])); // modified
console.log(isTrue([1,2,3]))
console.log(isTrue(NaN));
console.log(isTrue(-1))

interface BoolCheck<T> {
  value: T,
  is: boolean,
}


const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value:arg, is: false };
  }

  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};


interface HasID {
  id: number
}

const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic here
  return user;
}

console.log(processUser({id: 1, name: "Dave"}))
// console.log(processUser({name: "Dave"}))


const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
  return users.map(user => user[key])
}




// //############################ Tutorial - 7
// // index signature

// // interface TransactionObj {
// //   readonly [index: string]: number;
// // }

// interface TransactionObj {
//   readonly [index: string]: number;
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

// const todaysTransactions: TransactionObj = {
//   Pizza: -10,
//   Books: -5,
//   Job: 50,
//   // Dave: 42,
// };

// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions['Pizza']);

// let prop: string = 'Pizza';
// console.log(todaysTransactions[prop]);

// const todaysNet = (transactions: TransactionObj): number => {
//   let total = 0;
//   for (const transaction in transactions) {
//     total += transactions[transaction];
//   }

//   return total;
// };

// // console.log(todaysTransactions['Dave']);

// ///////////////////////////////////////////////////
// interface Student {
//   // [key: string]: string | number | number[] | undefined;
//   name: string;
//   GPA: number;
//   classes?: number[];
// }

// const student: Student = {
//   name: 'Doug',
//   GPA: 3.5,
//   classes: [100, 200],
// };

// // console.log(student.test);

// for (const key in student) {
//   console.log(`${key}: ${student[key as keyof Student]}`);
// }

// Object.keys(student).map((key) => {
//   console.log(student[key as keyof typeof student]);
// });

// const logStudentKey = (student: Student, key: keyof Student): void => {
//   console.log(`Student ${key}: ${student[key]}`);
// };

// logStudentKey(student, 'name');

// ///////////////////////////////////////
// // interface Incomes {
// //   [key: string]: number;
// // }

// type Streams = 'salary' | 'bonus' | 'sidehustle';

// type Incomes = Record<Streams, number | string>;

// const monthlyIncomes: Incomes = {
//   salary: 500,
//   bonus: 100,
//   sidehustle: 250,
// };

// for (const revenue in monthlyIncomes) {
//   console.log(monthlyIncomes[revenue as keyof Incomes]);
// }

//############################# Tutorial - 6
// Typescript Classes
// class Coder {
//   secondLang!: string;

//   constructor(
//     public name: string,
//     readonly music: string,
//     private age: number,
//     protected lang: string = 'Typescript'
//   ) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }

//   public getAge() {
//     return `Hell, I am ${this.age}`;
//   }
// }

// const Depp = new Coder('Johny', 'Rock', 42);

// console.log(Depp.getAge());
// // console.log(Depp.age)
// // console.log(Depp.lang);

// class WebDev extends Coder {
//   constructor(
//     public computer: string,
//     name: string,
//     music: string,
//     age: number
//   ) {
//     super(name, music, age);
//     this.computer = computer;
//   }

//   public getLang() {
//     return `I write ${this.lang}`;
//   }
// }

// const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
// console.log(Sara.getLang());
// // console.log(Sara.age);
// // console.log(Sara.lang);

// // interface in class
// interface Musician {
//   name: string;
//   instrument: string;
//   play(action: string): string;
// }

// class Guitarist implements Musician {
//   name: string;
//   instrument: string;

//   constructor(name: string, instrument: string) {
//     this.name = name;
//     this.instrument = instrument;
//   }

//   play(action: string): string {
//     return `${this.name} ${action} the ${this.instrument}`;
//   }
// }

// const Page = new Guitarist('Jimmy', 'guitar');
// console.log(Page.play('strums'));

// ////////////////////////////////////////////
// class Peeps {
//   static count: number = 0;

//   static getCount(): number {
//     return Peeps.count;
//   }

//   public id: number;
//   constructor(public name: string) {
//     this.name = name;
//     this.id = ++Peeps.count;
//   }
// }

// const John = new Peeps('John');
// const Steve = new Peeps('Steve');
// const Ammy = new Peeps('AMy');

// console.log(Ammy.id);
// console.log(Steve.id);
// console.log(John.id);
// console.log(Peeps.count);

// ///////////////////////////////////
// class Bands {
//   private dataState: string[];

//   constructor() {
//     this.dataState = [];
//   }

//   public get data(): string[] {
//     return this.dataState;
//   }

//   public set data(value: string[]) {
//     if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
//       this.dataState = value;
//       return;
//     } else trow new Error("Param is not an array of strings")
//   }
// }

// const MyBands = new Bands()
// MyBands.data = ["Neil Young", "Led Zep"]
// console.log(MyBands.data);
// MyBands.data = ["Van Halen", 5150];

// write a blog introductin on javascript

// //########################### Turorial - 5
// // Type Assertion
// // Aliases
// type One = string;
// type Two = string | number;
// type Three = 'hello';

// // convert to maore or less specific
// let a: One = 'hello';
// let b = a as Two; // less specific
// let c = a as Three; // more specific

// let d = <One>'world'; // its not allowed in tsx file
// let e = <string | number>'world'; // its not allowed in tsx file

// const addOrConcat = (
//   a: number,
//   b: number,
//   c: 'add' | 'concat'
// ): number | string => {
//   if (c === 'add') return a + b;
//   return '' + a + b;
// };

// let myVal: string = addOrConcat(2, 2, 'concat') as string; // type assertion

// // Be careful! TS sess no problem - but a string is returned
// let nextVal: number = addOrConcat(2, 2, 'concat') as number;

// // 10 as string;
// 10 as unknown as string; // double casting or forced casting

// // The DOM (Document Object Mode)
// const img = document.querySelector('img')!;
// const myImg = document.getElementById('#img') as HTMLImageElement; // "!" is called non nulll assertion
// const nextImg = <HTMLImageElement>document.getElementById('#img');

// img.src;
// myImg.src;

//############################ Tutorial - 4
//*** Type Aliases
// type stringOrNumber = string | number;

// type stringOrNumberArray = (string | number)[];

// type Guitarist = {
//   name?: string;
//   active: boolean;
//   albums: stringOrNumberArray;
// };

// type UserId = stringOrNumber;

// // Literal types
// let myName: 'Depp' | 'Johnny';
// myName = 'Johnny';

// let userName: 'Tom' | 'Keanu' | 'Ribs';
// userName = 'Keanu';

// // functions
// const add = (a: number, b: number): number => {
//   return a + b;
// };

// const logMsg = (message: any): void => {
//   console.log(message);
// };

// logMsg('hello');
// logMsg(add(2, 3));
// logMsg('hello1');

// let subtract = function (c: number, d: number): number {
//   return c - d;
// };

// // type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

// let multiply: mathFunction = function (c, d) {
//   return c * d;
// };

// logMsg(multiply(2, 2));

// // optional parameters
// const addAll = (a: number, b: number, c?: number): number => {
//   if (typeof c !== 'undefined') {
//     return a + b + c;
//   }

//   return a + b;
// };

// // default parameter value
// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//   return a + b + c;
// };

// logMsg(addAll(2, 3, 2));
// logMsg(addAll(2, 3));
// logMsg(sumAll(2, 3));
// logMsg(sumAll(undefined, 3));

// // rest parameters
// const total = (a: number, ...nums: number[]): number => {
//   return a + nums.reduce((prev, curr) => prev + curr);
// };

// logMsg(total(1, 2));

// const createError = (errMsg: string): never => {
//   throw new Error(errMsg);
// };

// const infinite = () => {
//   let i: number = 1;
//   while (true) {
//     i++;
//     if (i > 100) break;
//   }
// };

// // custom type guard
// const isNumber = (value: any): boolean => {
//   return typeof value === 'number' ? true : false;
// };

// // use of the never type
// const numberOrString = (value: number | string): string => {
//   if (typeof value === 'string') return 'string';
//   if (isNumber(value)) return 'number';

//   return createError('This should never happen!');
// };

// infinite();

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
