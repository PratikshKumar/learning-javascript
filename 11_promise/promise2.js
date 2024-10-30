// const promise1= new Promise(function(resolve,reject){
//     // db task
//     setTimeout(()=>{
//         console.log('Async done');
//         resolve();
//     }, 2000);
    
// });

// promise1.then(function(){
//     console.log("Promise consumed");
    
// })



// const promise2 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({name:"Humangasour", color : "brown"})
//     },2000);

// });
// promise2.then((user)=>{
//     console.log(user);
    
// })




const promise3 =  new Promise (function(resolve,reject){
    setTimeout(()=>{
        let error= false;
        if(!error){
        resolve({name:"Humangasour", color : "brown"})
        }
        else{
            reject('error ai gyo')
        }
    },3000);
});

promise3.then((user)=>{
    console.log(user);
    return user.color;
}).then((color)=>{
    console.log(color);
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("khtm");
    
});



// -- ABOVE CODE IN ASYNC AWAIT FORMAT --

async function promiseToAsync(){

try{

const user = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error)
        {
            resolve("hogya resolve");
        }
        else reject("rejected again");
    },2000);
});

console.log(user);

}
catch(error){
    console.log(error);
}
finally{
    console.log("finished");
}

}

promiseToAsync();



