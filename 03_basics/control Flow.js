// let val = a1 ?? a2;
// means if a1 is not null then assign val1=a1 else assign val=a2 

const mp = new Map();
mp.set('In','India');
mp.set('USA','America');
mp.set('Pak','Najaiz Aulad');



console.log(mp);
console.log(mp.keys());
console.log(mp.values());


// mp['UK']='United Kingdom'; // WRONG METHOD  

for(const [key,val] of mp)
{
    console.log(key, ` `, val);
}

const arr=[1,2,3,5];

// arr.forEach( function(val){
//     console.log(val);
// } )

// arr.forEach( (val)=>{
//     console.log(val);
// } )

arr.forEach( (item, ind,ar)=>{
    console.log(item);
} );


// ACCESSING ARRAY OF OBJECTS 

const arr2=[
    {name:"Pratiksh"},{name:"ms"},{name:"wd"}
];

arr2.forEach( (item)=>{
    console.log(item.name);
} );


// for each do not return anytihng 