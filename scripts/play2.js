// task: write a function that applies ohm's law (calc. electrical resistance) 
// on two arbitrary given values of the equotion E = I * R  

const input = {
    e: 100.0,
    i: 50
}

function ohm(values){
    const {r,e,i} = values;
    if (r && e) {
        return {
            i: e / r,
            r: r,
            e: e
        }        
    } else if (values.e && values.i){
        return {
            i: values.i,
            r: values.e / values.i,
            e: values.e
        }        

    } else if (values.r && values.i) {
        return {
            i: values.i,
            r: values.r,
            e: values.r * values.i
        }        
    } else {
        throw 'Incorrect input.'
    }
}

const output = ohm(input)
// output: {    e: 100.0, i: 50, r: 2.0}

console.log(output);

/*
// Example 2
const input = {
    r: 250.0,
    i: 4
}

const output = ohm(input)
// output: {e: 1000.0, i: 4, r: 250.0}
*/

console.log(ohm({
    r: 250.0,
    i: 4
}));

