// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

/*Stack and Heap memory
Primitive datatypes use stack
non-primitive use heap
in stack memory (Primitive), call by value is applied meaning when we call something we get a copy of its data, meaning the
original data is unchanged
in heap memory (Non-primitive) Call by Reference is used, meaning when we call something, the original value is referenced, so
it will be changed.
FOR EXAMPLE*/
let user1={
    name: "Saad",
    class: 2
}
let user2= user1;
user2.class=3;

console.log(user1.class);
console.log(user2.class);
//The value of both objects has been changed

