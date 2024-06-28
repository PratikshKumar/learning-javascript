const form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault();
  let ht= document.querySelector("#height").value;
  // . value is used if we have to extrac input 
  // also note that x is in string
  ht=parseInt(ht); 
  // converting to integer

  let wt=document.querySelector("#weight").value;
  wt=parseFloat(wt);

  const res=document.querySelector("#results");
  
  if(ht=='' || ht<0 || isNaN(ht)){
    res.innerHTML="ht Not Valid"; 
  } else if(wt=='' || wt<0 || isNaN(wt)){
    res.innerHTML="wt Not Valid"; 
  }
  else{
    const bmi = (wt/((ht*ht)/10000)).toFixed(2);

    res.innerHTML=` <span> ${bmi} </span> `;
  }


  

  // if()


} )