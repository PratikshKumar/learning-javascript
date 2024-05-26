 const name = "patrix"
 const age=21;

//  we dont use + for string now 
// we use string Interpolation 

// we make placeHolders. Jo b variable hai hum vaha pr inject kr skte hain 
// so we use back Ticks for this 

console.log(`Hello my name is ${name} and my age is ${age}`);

// Prefer to declre strings like this 
const name2= new String ('patricks')
// here name2 becomes object and has protype of String.  and has keyvalue pairs of 0 paired wit p, 1 with a and so on..
// it is preffered to use as we get many function builtin for objects
console.log(typeof name2);

// console.log(name2[0]);
// console.log(name2.__proto__); // accessing prototype 

// console.log(name2.length);
// console.log(name2.toUpperCase());

// console.log(name2.charAt(3));
// console.log(name2.indexOf('t'));

// console.log(name2.slice(-8,3));
// console.log(name2);


const str="   lai   ";
console.log(str);
console.log(str.trim());

// str.replace('a','y');
console.log(str.includes('sundar'));

const st="The quick fox jumps over the lazy donkey";
const words=st.split(' ');
// divides st on basis of ' ' and store it in array for m in words
console.log(words[3]);

const chakk= st.split('');
console.log(chakk);


