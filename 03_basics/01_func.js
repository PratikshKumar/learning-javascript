const user = {
    username: "patricks",
    price: 999,

    welcomeMessage: function()
    {
        console.log(`${this.username} , Welcome bhaii`);
        console.log(this);
    }
}
// this refers to the current context 

// user.welcomeMessage();
// user.username="spongebob";
user.welcomeMessage()

console.log(this);
// here this refers to an empty object in our environemt

// when we do console.log(this) in chrome console,
// we get op as Window 
// Reason: browser mein jab engine run krta, sabse zada jo global object hai vo window onject hai
// thats why we are able to capture the events of Window 



