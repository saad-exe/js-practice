// //falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

// const emptyObj={}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object/array is empty");
    
// }

// Nullish Coalescing Operator (??): null, undefined

let val1;
val1=5 ?? 10
val2 = null ?? 20
console.log(val1);
console.log(val2);
//its a failsafe to avoid unneeded scenarios

//Terniary Operator
//condition ? true:false
const tea=100
tea>=80 ? console.log("greater than 80") : console.log("Less than 80");

