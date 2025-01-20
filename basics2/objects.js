//object literals

// const jsUser={
//     name: "saad",
//     age: 21,
//     location: "Islamabad"
// }
// console.log(jsUser);
// console.log(jsUser.location);
// console.log(jsUser["location"]);   //This way is more flexible

// const obj1={
//     1: "a",
//     2: "b"
// }
// const obj2={
//     3:"c",
//     4: "d"
// }

// obj3={...obj1, ...obj2}
// // console.log(obj3);

// const users=[
//     {
//         id:1,
//         name: "man"
//     },
//     {
//         id:2,
//         name: "woman"
//     },
//     {
//         id:3,
//         name:"dude"
//     }
// ]

// users[1].email
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));

//DESTRUCT OBJECTS
const course={
    courseName:"JS",
    coursePrice:"2000",
    courseInstructor:"someDude"
};

const {courseInstructor}=course;
console.log(courseInstructor);

const {courseInstructor: instructor}=course;
console.log(instructor);
