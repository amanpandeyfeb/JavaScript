/*let score =true

console.log(typeof score);
console.log(typeof(score));

let valueinNumber = Number(score)
console.log(typeof valueinNumber);
console.log(valueinNumber);
*/


//****************Operaion***************

//console.log(2+2)

let str1 = "hello"
let str2 = "aman"

let str3 = str1 +str2;
//console.log(str3);


//console.log("1"+2);//12
//console.log(1+"2");//12
//console.log("1"+2+2);//122
//console.log(1+2+"4");//34

//console.log("2">1);
//console.log("aman">1);
//console.log(null>=0);

//console.log("2"==2);//true
//console.log("2"===2);//false


//Datatypes

//Primitive Datatypes:-->7 types: String, Number, Boolean, Null, Undefined, Symbol,BigInt

const score= 100;
const scorevalue= 100.1;
const scorenum= false;
const id =Symbol('123')
const idsecond =Symbol('123')
console.log(id===idsecond);

//Reference Datatypes(Non Primitive):--> Arrays, Objects, Functions

const heros =["saktiman","bheem", "bajrangi"]

let obj = {
    name:"aman",
    age:33
}

const myfunction= function(){
        console.log("I am A Function")
}

console.log(typeof null);//object

console.log(typeof myfunction);//function
console.log(typeof obj);//object
console.log(typeof heros);//object


const astring = new String("AMAN");
console.log(astring);