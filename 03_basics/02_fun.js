function fun()
{
    let user="pants";
    console.log(this.user);
}

fun()
// we get undefind here becuase this keyword dont work in functions


// const lai = function()
// {
    
// }
// converting abive to arraw wala represengation 

const lai =  () => {
    let user = "bob";
    console.log(this);
}

lai()


const add = (n1,n2) =>{
    return n1+n2;
}

console.log(add(3,4));

// IMPLICIT RETURN IN A FUNCTION 

const laii= (n1,n2) => (n1+n2)
console.log(laii(3,5));
// () ka use hota for returning anyting 
