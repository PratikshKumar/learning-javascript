// Creating an object using object literal syntax
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "traveling", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },

    // Method (function) inside an object
    // OBJECT MEIN FN BNATE HUE : LAGATE HAIN
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing object properties
console.log(person.firstName); // Outputs: John
console.log(person["lastName"]); // Outputs: Doe
console.log(person.age); // Outputs: 30
console.log(person.hobbies[1]); // Outputs: traveling
console.log(person.address.city); // Outputs: Anytown

// Calling a method
console.log(person.fullName()); // Outputs: John Doe

// Modifying object properties
person.age = 31;
person.isEmployed = false;
person.hobbies.push("photography");

console.log(person.age); // Outputs: 31
console.log(person.isEmployed); // Outputs: false
console.log(person.hobbies); // Outputs: ["reading", "traveling", "coding", "photography"]
