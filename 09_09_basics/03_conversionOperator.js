let score="13abe"  //null will print 0  `undefined also print NaN  

console.log(typeof score);
console.log(typeof (score));
  
let valueInNumber=Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);


//"33" => 33
//"33abc"  => NaN
//"true" => 1, false => 0

let isLoggedIn=0

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


//""  => false
//"aman"  => true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
