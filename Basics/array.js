//array:- Are resizable

//const myarr = [0,9,7,3,4,6]
//const hhh=["aman","dddd"]

//const arr1 = new Array(1,6,74,443)



//console.log(arr1);

//arr1.push(19);
//arr1.pop();//[1,6,443,19]
//console.log(arr1.indexOf(443))
//console.log(arr1);.


//slice, splice
/*
console.log("A ", arr1)
const my1 = arr1.slice(1,3);
console.log(my1);//[6,74] does not maniputes theorginal array
console.log(arr1);

console.log("B ", arr1)
const my2 = arr1.splice(1,3)
console.log(my2)//manipulates the original array[6,7,443]
console.log(arr1);[1]
*/

const marvel= ["thor" ,"Ironman","dr strange"]
const dc= ["Batman", "wonderwomen", "supperman"]

//marvel.push(dc)
//console.log(marvel);//["thor" ,"Ironman","dr strange",["Batman", "wonderwomen", "supperman"]]

// we should use concat

//const allheroes= marvel.concat(dc)
//console.log(allheroes);//[ 'thor','Ironman','dr strange','Batman',wonderwomen','supperman']

//spread operator we can use
const allspread =[...marvel,...dc]
console.log(allspread);//[ 'thor','Ironman','dr strange','Batman',wonderwomen','supperman']

const another_arr= [1,3,4,5,[2,4,6],[9,6,7]]
real=another_arr.flat(Infinity)
console.log(real);//[1,3,4,5,2,4,6,9,6,7]

//array.of