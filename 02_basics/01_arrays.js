//  shallow copy -> reference bnta
//  deep copy -> call by value 


let myArr= new Array(1,2,3,4,5);
console.log(typeof myArr);
console.log(myArr[2]);

console.log(myArr);
const arr2=myArr.join()
console.log(typeof arr2);
console.log(arr2);

console.log("--------");
console.log(arr2[1]);

console.log("A ",myArr); // A [1,2,3,4,5]

const m1= myArr.slice(1,3);
console.log(m1);            // [2,3]
console.log("B ",myArr); //B [1,2,3,4,5]

const m2=myArr.splice(1,3);
console.log(m2);        // [2,3,4]
console.log("C ",myArr); // C [1,5]