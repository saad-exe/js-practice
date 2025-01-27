// for (let index = 0; index < 10; index++) {
//     console.log(index);  
    
// }

//for of

// const arr=[1,3,5,6]
// for (const val of arr) {
//     console.log(val);
    
// }

// const greetings= "Hello world!"
// for (const greet of greetings) {
//     console.log(greet);
    
// }

//maps
const map=new Map()
map.set('IN','India')
map.set('PK','Pakistan')
map.set('IN','India')   //doent have duplicate values
console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-' , value);
    
}