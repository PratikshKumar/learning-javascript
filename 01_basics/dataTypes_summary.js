/*
    DataTYPES: Primitive, Non Primitive(refencetype)

    kis tarah mein data ko memory mein rkha jata hai and aceess kia jata hai,
    uuske basis pe 2 types ke categorization hain. primmtive and non primitive

    Primimitve (CallByValue):
        7 categories:
        String, Number, Boolean, null, undefined, Symbol, BigInt 
        (kisi b value ko unique banane ke lie Symbol use hota hai)


    NonPrimitive (RefernceType):
    arrays, objects, Functions


*/

 /*
    Javascript is dynamically typed language.
    It means that variables in JS  dont have fixed type and their types can be changed at runtime. 

    C++,C,Java are Stically typed language.

    TypeScript is a statically typed superset of JavaScript. It builds on JavaScript by adding static type definitions

 */
 
    const id = Symbol('123')
    const id2= Symbol ('123')
    console.log(id);
    console.log(id==id2);

    // const num=5743658765n
    // just like c++ has *1ll, in jswe have n written after number 

    const words= ["lai", "vai", "laivailai"] // array

    let myObj = {
        name:"patrix",
        age:19,
    }
    //  {} mein kuch b hoga vo object hoga 

    

    /*

        Return type of variables in JavaScript
        1) Primitive Datatypes
            Number => number
            String  => string
            Boolean  => boolean
            null  => object 
            undefined  =>  undefined
            Symbol  =>  symbol
            BigInt  =>  bigint

        2) Non-primitive Datatypes
            Arrays  =>  object
            Function  =>  function (function object)
            Object  =>  object

    */


    /*
    n JavaScript, an object is a collection of properties,
     where each property is a key-value pair.
      Objects can contain properties of various 
      types, including primitives (strings, numbers, booleans, etc.), 
      other objects, functions, and arrays. 
      
      Objects are a fundamental data type in JavaScript and are used to represent complex data structures.
    */



    //   FUNCTIONS IN JS 

      const greet = function(name) {
        return `Hello, ${name}!`;
    };
    
    console.log(greet("Pratiksh"));


    console.log(typeof BigInt);