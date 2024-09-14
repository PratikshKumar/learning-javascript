// let value = 3
// let negValue = -value
// console.log(negValue);

// let str1="hello"
// let str2 = " raghav"
// let str3= str1+str2
// console.log(str3);

console.log("1" + 2);
console.log(typeof("1" + 2));

console.log("1"+2+2);
console.log(typeof("1"+2+2));


console.log(1+2+"2");
console.log(typeof(1+2+"2"));

console.log(+true);
console.log(+"");

console.log(!null);
 console.log(!undefined);
 console.log(null==undefined);

 console.log("2">1);
 console.log("02">1);
console.log("-------------------");

console.log(null>0); // false
console.log(null==0); //false
console.log(null>=0); // true

// reason: (eqauality)== and comprasions(>,<,>=,<=) work diifrentlly.
// comparisons convert null to a number and treat it as 0 


//same issue with undefined. but undefined gives false in all cases 

// === checks values also and datatypes also
// == can do the conversions and then compares their values 

// console.log(+null);
