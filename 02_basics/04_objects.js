const mySym=Symbol("key1");

const JsUser={
    name: "Patricks",
    age: 18,
    [mySym]: "mykey1",
    location: "Prayagraj",
    email: "pratiksh@gmail.com",
    isLoggedIn: false
}

JsUser.greeting= function(){
    console.log(`Hello ${this.name} ji`);
}

console.log(JsUser);
JsUser.greeting();
// console.log(JsUser.greeting);  