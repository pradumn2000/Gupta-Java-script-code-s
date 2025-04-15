const accountId=14453;
let  accountEmail="test@gmail.com";
var accountPassword="12345";
accountCity="jaipur";
let accountState;

//accountId=2; constant variables are not changebles this through error
accountEmail="hdfc.com";
accountCity="bangluru";
accountPassword="12345"; 
// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
/*
prefer not to use var 
because of issue in block scope and functional scope
 */