const marvelHeroes=["thor","ironman","spiderman"];
const dcHeroes=["superman","flash","batman"]

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

// const allHeroes=marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

// const allHeroes=[...marvelHeroes, ...dcHeroes];
// console.log(allHeroes);
const allHeroes=[...marvelHeroes, ...dcHeroes];
console.log(allHeroes);

// here we used the spread operator above and we spread the all elemnts of a array and put them in another array

console.log(Array.isArray("patricks"));
console.log(Array.isArray( [1,2,3] ));

console.log(Array.from("patricks")); // convers to array
// .of
// .from({name: "lai"})
 
// let MyObj={
//     name:"Pratiksh",
//     age:19
// }
// console.log(MyObj);
// console.log(typeof MyObj);