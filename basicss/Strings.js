// const name="saad"
// const artworks=55
//console.log(name + artworks + " Damn");       OLD Style so not recommended

//This one is recommended. We USE The symbol `` to write it (Below esc button) KNOWN AS STRING INTERPOLATION
// console.log(`Hello my name is ${name} and I have a total of ${artworks} artworks`);

//Another way to write String (We get a lot more functions and functionality this way)
const gameName= new String('SyNtaX-gif');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);  //length starts from 1, so we get the result 6 for SyNtaX
// console.log(gameName.toLowerCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,5);
console.log(newString);



