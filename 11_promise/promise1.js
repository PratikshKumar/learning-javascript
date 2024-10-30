const promiseOne = new Promise(function(resolve,reject){
    // db calls, async task
    setTimeout(() => {
        console.log('Async completed');
        resolve();
        
    }, 2000);
});

promiseOne.then(function(){
    console.log("Promise consumed");
    
})



// // Q/ BlueBird li:
// // when promses were nit there in js 
// // these were used.



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async-2");
//         resolve();

//     },3000);
// }).then(()=>{
//     console.log("Async2 resilved");
// });



// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({username:"Chai", email:"chai@code.com"})
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user);
    
// })










const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error= false;
        if(!error){
            resolve({username:"Goten", password: "Gohan bhaai"});
        }
        else
        {
            reject('CALL GOKU. ERROR AAGYA');
        }
    },3000);

});

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
    
}).finally(()=> console.log("the promose id either reolsved or rejected"));



// // finally will always execute totll that if it is complted that we wanted todo or not 





// const promiseFive = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         let error= true;
//         if(!error){
//             resolve({username:"Videl", password: "Gohan loves Videl"});
//         }
//         else
//         {
//             reject('Videl ko khaansi aa gyi');
//         }
//     },4000);

// });

// // we can use Async Await also instead of then and catch in promises

// async function consumePromiseFive(){
//    try{ const response = await promiseFive;
//     console.log(response);
//    }
//    catch(error){
//     console.log(error);
    
//    }
    
// };
// consumePromiseFive();


// ----------------------------PRACTICE-----------


// const promisee = new promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"Videl", age: 21});
//     },2000);
// });
// promisee.then((user)=>{
//     console.log(user);
// });

