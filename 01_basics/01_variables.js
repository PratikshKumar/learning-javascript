const accountId= 14453
let accountEmail = "pratiksh@gmail.com"
var accountPwd="12345"
accountCity="Amritsar" // not a good method to decalr like this

let accountState;

console.log(accountId);
// accountId= 2 (NOT ALLOWED)

accountEmail="pratiksh.sk@gmail.com"
accountPwd="54321"
accountCity="Ayodhya"

console.table([accountId,accountEmail,accountPwd,accountCity, accountState ]);

// we dont use var beacuse it does not have scope. 
// thats why we use let 

// we dont use var due to issue in block scope and functional 
