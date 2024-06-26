const arr=[1,2,3,4,5,6,7];

const newArr= arr.filter( (nums)=>{
    return nums>4;
} );

// filter helps to return in arrays 

console.log(newArr);

// if we wan to edit some destils and access thm, we use map 
const newArr2= arr.map( (nums)=>{
    return nums+10;
} )

console.log(newArr2);



// Key Differences:
// Output:

// .filter() results in a subset of the original array based on a condition.
// .map() results in a new array where each element is transformed based on the provided function.
// Callback Return Value:

// In .filter(), the callback function returns a boolean value (true or false).
// In .map(), the callback function returns the new value for each element.
// Array Length:

// The length of the array returned by .filter() can be less than or equal to the original array (depending on how many elements pass the condition).
// The length of the array returned by .map() is always the same as the original array.

