// SINGLETON : KOI B CONSTRUCTOE HUM ISSE JO BNATE HAIN VO SINGLETON BNATA HAI, YAANI KI YE APNE TARAH KA EK HEE OBJECT HAI.

// IF DECLARED BY LITERALS, SINGLETON nhi BANTA
// IF DECLARED BY CONSTRUCTOR, Singleton hee banta hai 

// Object.create (constructor method)
const JsUser={
    name: "Patricks",
    age: 18,
    location: "Prayagraj",
    email: "pratiksh@gmail.com",
    isLoggedIn: false
}

console.log(JsUser.email);
console.log(JsUser["email"]);

// USING SYMBOL IN A OBJECT, we use []

const mySym= Symbol("kuch to h");
console.log(mySym);

const JsUser2={
    name: "Patricks",
    age: 18,
    [mySym]: "mykey1",
    location: "Prayagraj",
    email: "pratiksh@gmail.com",
    isLoggedIn: false
}

console.log(JsUser2[mySym]);
console.log(JsUser2.name);
console.log(JsUser2["name"]);
// console.log(mySym);

// when i feeze my Object, thrn any changes done it in will not  be reflected 
Object.freeze(JsUser2);
JsUser2.age=21;
console.log(JsUser2);

console.log(typeof(JsUser2));
