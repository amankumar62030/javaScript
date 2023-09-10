// Primitive DataType
//7 categories: String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);


const bigNumber=27353534344352252n





//Reference DataType (Non-primitive)

//Array,Objects,Functions

const heros=["shaktiman","doga","naagraj"]
let myObj={
    name:"aman",   //inside curly bracess are objects
    age: 22,
}

const myFunction=function(){
    console.log("hello world");
}

console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof anotherId);



//********************************************************** */
//Stack (Primitive),  Heap (Non-primitive)

let myYoutubename="helloworlddotcom"

let anothername="chaiaurcoonde"
console.log(myYoutubename);
console.log(anothername);


let userOne={
    email: "user@google.com",
    upi:"user@ybl"
}


let userTwo=userOne

userTwo.email="hiii@google.com"
console.log(userOne.email);
console.log(userTwo.email);
