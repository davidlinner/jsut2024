
let list = [
    'hello', 
    'from', 
    'berlin', 
    'to', 
    'the', 
    'big', 
    'city', 
    'of', 
    'changzhou'];

// task: write some code to move all words starting with letter 'b' to the front of the list
// Solution 1:

const result = [];

for (const item of list){
    if(item.charAt(0) == 'b'){
        result.push(item);
    }
}

for (const item of list){
    if(item.charAt(0) != 'b'){
        result.push(item);
    }
}

console.log(result.join('\r\n'));


// result should look like that:
/*
[
    'berlin', 
    'big', 
    'hello', 
    'from', 
    'to', 
    'the', 
    'city', 
    'of', 
    'changzhou'];
*/

