// generate a ranom color;

const randomColor= function(){
  const hex= "0123456789ABCDEF";
  let color= "#";

  for(let i=0;i<6;i++)
  {
    let ind= Math.floor(Math.random()*16);
    color+= hex[ind];
  }
  return color;

};

// --------------------------------------------------------------------------------------

const changeBG= function(){
  document.body.style.backgroundColor=randomColor();
}

let t1=null;

document.querySelector("#start").addEventListener('click',function(e){  
  if(!t1)
  t1=setInterval(changeBG,1000)
})

document.querySelector("#stop").addEventListener('click',function(e){
  clearInterval(t1);
  t1=null;
})

// document.querySelector("#stop").addEventListener('click',StartChangingColor);
