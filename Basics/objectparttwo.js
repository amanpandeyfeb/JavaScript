const tinderuser ={}

tinderuser.id ="122a"
tinderuser.name="aman"
tinderuser.age="23"
console.log(tinderuser);//{ id: '122a', name: 'aman', age: '23' }


//destructuring

const course= {
    coursename: "Js i hindi",
    price: "129299",
    courseinstru: "hahaa"
}

const {courseinstru: instruc} =course
console.log(instruc);

