// const User = new Object() // singleton object
const User={} // non singleton object

User.id="123abc";
User.name="laal"
console.log(User);

const ob1={1:"a", 2:"b"};
const ob2={3:"a", 4:"b"};
const ob3={5:"a", 6:"b"};

const ob4=Object.assign({},ob1,ob2,ob3);
const ob5= {...ob1,...ob2,...ob3};
console.log(ob4);
console.log(ob5);

console.log(Object.keys(ob4));
console.log(Object.values(ob4));
console.log(Object.entries(ob4));