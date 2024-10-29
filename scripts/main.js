// JavaScript 101 
// JavaScript files have .js as ending

const x = 10;
let y = 10;

// x = 11; // doesn't work - x is immutable
y = 11; // works

console.log('hello')
console.log("world")

if(x == 30) {
    console.log('Is 30');
} else {
    console.log('Is something else');
}

// this is a counting loop in JavaScript
for(let i = 0; i < 10; i++){
    console.log(i);    
}

// iterating loop
const list = ['first item', 'second item', 'third item']; 
for (let item of list){
    console.log(item);
}

// while loop - open breaking condition 
let i = 0;
while(i++ < 100){
    console.log('Oh no, no breaking condition');
}

// standard notation of a function definition
function myFunction(a,b,c){
    return a + b + c;
}

console.log(myFunction(1,2,3));
console.log(myFunction('a','b','c'));

// arrow notation for functions (inline notation)
const pow = (base, exponent) => Math.pow(base, exponent);

console.log(pow(2, 8))

// JavaScript was not designed for "classes", but you can use classes

// object definition
const o = {
    propA : 'hello',
    propB : true,
    myMethod(){
        console.log('Called my method: ' + this.propA);
    },
    anotherMethod: () => {
        console.log('Called my method');
    }
}

// object property access
console.log(o.propA);
console.log(o.propB);

// method invocation 
o.myMethod();

function apply(list, applicator /* is a function */){
    const result = [];
    for (const item of list){
        result.push(applicator(item));
    }
    return result;
}

const numbers = [1, 1, 2, 3, 5, 8, 13, 21]; 

// passing functions as arguments
const r = apply(numbers, (x) => x + 1);

console.log(r);

const o2 = {
    a: 1,
    b: 20,
    c: 100,
    d: 500
}

// object destructuring with rest operator
const {a,b, ...others} = o2;

console.log(a);
console.log(others);

// array destructuring with rest operator (...)
const [s,t,...rest] = numbers;

console.log(rest);

const l1 = [1,2];
const l2 = [3,4]

// spread operator (when ... is used in an expression)
const l3 = [...l1, ...l2, 5];

console.log(l3);

// class definition
class Hello {

    constructor(greeting){
        this.greeting = greeting;    
    }

    greet(){
        // string interpolation
        console.log(`hello ${this.greeting}`)
    }
}

// class instantiation
const h = new Hello('class 2022');
h.greet();




