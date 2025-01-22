//Immedieately invoked function expressions (IIFE)
//useful for if supposedly you want database connection as soon as app opens
//also useful to avoid global scope pollution
(function chai(){   //Named iife
    console.log("DB Connected");
    
})(); //semicolon is necessary now

(()=>{      //Simple iife
    console.log(`DB Connected 2`);
    
})();

((name)=>{
    console.log(`DB Connected 2, welcome ${name}`);
    
})("saad");