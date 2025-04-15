let score = "33"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"=>33 vhange in number
//"33abc" => NaN (not a number ) 
// true=>1; false=>0

//let isLoggedIn=1
let isLoggedIn=" hitesh "
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//when we changed 1=> true; 0=> false 
// when we changed empty value ""=>false
// when we changed string "hitesh"=> true

let str1="ayush"
let str2="pria"
let str3=str1+str2
console.log(str3);
