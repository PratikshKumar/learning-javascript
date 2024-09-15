// IIFE: IMMEDIATLRY INVOKED FN EXPRESSIONS

// we want to immediatley execute a function. 
// Eg: when we run a file, we want that at tha instant, it should be connected to database. 

// to avoid pulltion ffrom global scope as it can pollute
//  
// global scope ke pollution se dikkt hoti kai bar 
// to uss global scope ke variab;les ke pollution ko htane keliye, we use IIFEE

(function chai()
{
    console.log(`DB CONNECTED`);
})();
// above is named IIFE

// first () means fn defination and second () means fn execution 

// const yo = ( ()=>
// {
//     console.log(`DB yo CONNECTED`);
// })();


( ()=>{
    console.log(`DB 2 CONNECTED`);
} )();

( ()=>{
    console.log(`DB 4 CONNECTED`);
} )();



( (name)=>{
    console.log(`DB 3 coonnetd by ${name}`);
} )('PATRICK')
