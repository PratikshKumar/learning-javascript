
// https://stackblitz.com/edit/dom-project-chaiaurcode-zda9td?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Fstyle.css,1-colorChanger%2Findex.html

const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body= document.querySelector("body");

buttons.forEach( function(but){
  console.log(but);
  but.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id=="grey"){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=="yellow")
    {
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=="blue")
    {
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=="white"){
      body.style.backgroundColor=e.target.id;
    }

  })
} )

