const accountId = 144553
let accountEmail= "abc@gmail.com"
var accountPassword = "12345"  //Not recommended to use var
accountCity= "Isb"
let accountState;  //LET IS THE BEST THING TO USE

//accountId=2   //Can't Change Variables which are "const" because they are constant
accountEmail = "ayy"
accountPassword= "4321"
accountCity= "Rwp"

console.log(accountId);

/*PREFER NOT TO USE VAR BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);