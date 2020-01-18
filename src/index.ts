// basic Types

// boolean
let isDone: boolean = false;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octalL: number = 0o744;

// string
let color: string = "red";
color = 'blue';
let fullName: string = `Bob Bobbingtoin`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName}. I'll be ${ age + 1 } years old next month.`;

// array
let list: number[] = [1,2,4];
let list2: Array<number> = [1,2,3];

// tuple
let x: [string, number];
x = ['hello000', 10]; // oke
//x = [10, 'hello']; // error
console.log(x[0].substring(3)); // oke
//console.log(x[1].substring(1)); // error
//x[3] = "world"; //error
//console.log(x[5].toString());

// enum
enum Color {Red, Green, Blue}
let c: Color = Color.Blue;
let g: Color = Color.Green;
let k: string = Color[0];
console.log(c);
console.log(g);
console.log(k);

// any
let notSure: any = 4;
notSure = "maybe a string instead'";
notSure = false; // or boolean
let notSure2: any = 4;
//notSure2.ifItExists(); // might exist at runtime
notSure2.toFixed(); // exists but the compier doest't check
let prettySure: Object = 4;
// prettySure.toFixed(); // error
let listq: any[] = [1, true, "free"];
listq[1] = 100;

// void
function warnUser(): void {
    console.log('this is my warning message');
}

//null and undefined
let u:undefined = undefined;
let n: null = null;

// union type
let union: string | number = 'union';
union = 3;

// never
function  error(message: string): never {
    throw new Error(message);
}

// object = anything is that is not number, string, boolean,bigint, symbol, null or undefined
declare function create(o: object | null): void;
//create({prop: 0});
//create(null);
//create(43); // error
//create('string'); // error
//create(false); // error
//create(undefined); // error

// type assertions
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
let someValue2: any = 'this is a string';
let strLength2: number = (someValue as string).length;




