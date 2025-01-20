// const myArr= [1,2,3,4,5]
// const myHeros= ["gigaman", "asdad"]
// console.log(myArr[0]);
// //arrays have a lot of methods
// myArr.push(6)
// myArr.push(10); //push adds element at the end
// console.log(myArr);
// myArr.pop();  //removes element from the end
// console.log(myArr);
// //we also have shift and unshift, Unshift adds element at the start while shift removes one element from the start
// console.log("A: ", myArr);

// const newArr=myArr.slice(1,3);
// console.log(newArr);
// console.log("B: ", myArr);

// const newArr2=myArr.splice(1,3);
// console.log(newArr2);
// console.log("C: ", myArr);
//Slice doesnt change the original array, while splice does

//Combining 2 arrays
// const cities=["isl","kch","lhr"]
// const countries= ["pak","ind","afg"]
// const citcont=countries.concat(cities)
// console.log(citcont);
// //Another way, by using spread, much better as we can add more than 2 arrays in a single line of code
// const newarr=[...cities, ...countries]
// console.log(newarr);

//flat is used to flat out an array, a depth is specified to know how much to flatten, infinity can be used if you want 
//the utmost flat array
const goofyarray=[1,2,3,[1,2,3,4],5,6,[9,0,[20,34]],100]
console.log(goofyarray);
const lockedInArray=goofyarray.flat(Infinity);
console.log(lockedInArray);
