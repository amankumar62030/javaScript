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

  //*******************************Operators********************************************************** */

  let value=3
  let negValue=-value
  console.log(negValue);


  console.log(2**3);



  let str1="hello"
  let str2="aman"
  let str3=str1+str2
  console.log(str3);


  console.log("1" + 2);
  console.log(1 + "2");
  console.log("1" + 2 + 2);
  console.log(1 + 2 + "2");

  console.log((3 + 4) * 5 % 3);

  console.log(+"");
  console.log(+true);

  let num1,num2,num3
  num1=num2=num3=2 + 2

  let gameCounter =100
  gameCounter++;
  console.log(gameCounter);

  