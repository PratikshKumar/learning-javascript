let d= new Date();
console.log(d);

console.log(d.toString());
console.log(d.toDateString());
console.log(d.toISOString());
console.log(d.toTimeString());
console.log(d.toLocaleString());

console.log("---");


// month follows 0 based indexing
let myDate= new Date(2024,4,26 ); // 26/05/2024
console.log(myDate.toDateString());

myDate = new Date(2024,8,14,14,54);
console.log(myDate.toLocaleString());

console.log("p------");

let myTimeStamp=Date.now();

console.log(myTimeStamp);
console.log(myDate.getTime());
console.log("haaan");
// we can compare these 2 time stamps for comparison
// it is time in milli sec from 1 jan 1970


console.log(d.getMonth());

// customizing date format
d.toLocaleString('default',{
    weekday:"long"
}) ;

console.log(d);

