// let val = a1 ?? a2;
// means if a1 is not null then assign val1=a1 else assign val=a2 

const mp = new Map();
mp.set('In','India');
mp.set('USA','America');
mp.set('Pak','Najaiz Aulad');

// mp['UK']='United Kingdom'; // WRONG METHOD  

for(const [key,val] of mp)
{
    console.log(key, ` `, val);
}