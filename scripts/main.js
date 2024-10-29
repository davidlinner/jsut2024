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

const list = ['first item', 'second item', 'third item']; 
for (let item of list){
    console.log(item);
}

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

console.log(o.propA);
console.log(o.propB);

o.myMethod();





