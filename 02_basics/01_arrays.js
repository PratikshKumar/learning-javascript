//  shallow copy -> reference bnta
//  deep copy -> call by value 

let myArr= new Array(1,2,3,4,5);
console.log(myArr);
const arr2=myArr.join()
console.log(typeof arr2);
console.log(arr2);

console.log("A ",myArr);

const m1= myArr.slice(1,3);
console.log(m1);
console.log("B ",myArr);

const m2=myArr.splice(1,3);
console.log(m2);
console.log("C ",myArr);