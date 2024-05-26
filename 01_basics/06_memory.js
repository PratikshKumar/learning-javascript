//  we are not given much control on language on the modern languages like js
// automatic garbage collection is there in JS

// Memories: Stack and Heap 

// all primtive datatypes uses stack memory 
//  Heap memory is used by all Non primimtive types 

 let user1={
    name: "patrix",
    age: 19
 }
 let user2=user1;

 user2.age= 21;
 console.log(user1.age);