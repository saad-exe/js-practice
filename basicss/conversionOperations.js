let score="23"
let score2= "22Sup"
console.log(typeof score)
console.log(typeof score2)

// let valueInNumber= Number(score)
// let valueInNumber2=Number(score2)

// console.log(typeof valueInNumber)
// console.log(typeof valueInNumber2)  //It  shows up as a number

// console.log(valueInNumber2)     //But that number will be Nan (Not a Number)

//if we are converting a string with null, we get zero after conversion
//If undefined we get NaN
//if converting boolean to number, we get 1 for true and 0 for false
/*
"33" = 33
"33abc" = NaN
null= 0
undefined = NaN
Boolean true/false = 1/0
*/
let isLoggedIn=""
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)
//1 = true
//0 = false
//Empty String ""= false
// String eg. "ayy"= true