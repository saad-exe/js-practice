const user={
    username: "saad",
    price:999,
    welcomeMsg:function(){
        console.log(`${this.username} Welcome to website`);    
    }

}

// user.welcomeMsg()
// user.username="man"
// user.welcomeMsg()

// function chai(){
//     let user=21
//     console.log(this.user);
    
// }
// chai()

//ARROW FUNCTION
// const chai=()=>{
//     let username="saad"
//     console.log(this);
    
// }
// chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }

//implicit return of arrow functions
const addtwo=(num1,num2)=> (num1+num2)      //This techinique is used a lot in react
console.log(addtwo(2,5));
