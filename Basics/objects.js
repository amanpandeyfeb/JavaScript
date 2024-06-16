//Singleton
//Object.create



//Objects Literals

const mysyn=Symbol("key1")

const Jsuser={
    [mysyn]: "mykey1",
    name: "Aman",
    age: 18,
    location: "Kanpur",
    email: "aman@gmail.com",
    lastlogin: ["Monday","tuesday"]

}

//console.log(Jsuser.email);

//console.log(Jsuser["email"])
//console.log(Jsuser["age"]);

Jsuser.email="pandey@gmail.com"
Object.freeze(Jsuser);
Jsuser.greeting = function() {
    console.log("hello i am function");
}
///console.log(Jsuser.greeting());

Jsuser.greeting2 = function(){
    console.log('I am the 2nd function, ${this.name}');
}
console.log(Jsuser.greeting2());



