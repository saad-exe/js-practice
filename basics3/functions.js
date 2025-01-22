// function sayMyName(){
//     console.log("S");
//     console.log("A");
//     console.log("A");
//     console.log("D");
// }
// //sayMyName();

// function add2Numbers(number1, number2){
//     console.log(number1+number2);
//     return number1+number2
// }
// const newNum= add2Numbers(2,4)
// console.log(newNum);

function calculateCartPrice(...num1){         //"..." is used if we want to take multiple arguments but dont know exactly how many
                                                // or if the arguments vary.returns an array
    return num1
}

console.log(calculateCartPrice(30,20,10))
const user={
    username:"saad",
    id:12

}