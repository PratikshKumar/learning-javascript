// spread operator is used to spread the content of an array

// Spread operator allows us to deconstruct an array or object into separate variables

const num1=[1,2,3,4,5];
const num2=[6,7,8,9,10]

const num3= [...num1,...num2]
console.log(num3);

console.log(typeof num3);
console.log(Array.isArray(num3));


// Rest operator allows us to collect 
// multiple elements into a single array,
// especially in function definitions

function calculatePrice(...num1)
{
    return num1;
}

function calculatePrice(v1,v2,...num1)
{
    return num1;
}


console.log(calculatePrice(2,3,4,5,6,7));
