//THIS IS GLOBAL SCOPE (OUTside {})
if(true){
    //this is block scope
    let a =20
    const b= 30
    var c= 10
}
//console.log(a);
//console.log(b);
console.log(c);     //var ignores scope so its bad, even tho it was declared inside the if block, it is still printed 

//Scope is {}
