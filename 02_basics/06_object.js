const course ={
    name: "Js",
    price:"10",
    CourseInstructor:"Chai"
}

// insetead of writing Course.CourseInstructor many Times,
//  we do de-structuring of our object 

const {CourseInstructor: prof}=course
console.log(prof);

