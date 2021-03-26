const fs = require("fs");

// B gets a pending Promise             //A-> initially returns a pending promise
let pendingPromise = fs.promises.readFile("./f1.txt");

console.log(pendingPromise);
// pendingPromise => promise obj whose state is pending!!!


// sucess callback => scb attached to promise obj (pending Promise)
pendingPromise.then(function(data){
    console.log("Inside then ka callback i.e. scb");
    console.log(data);          //use console.log(data + ""); for output in string format
    console.log(pendingPromise);
});

// failure callback => fcb attached to promise obj (pending Promise)
pendingPromise.catch(function(error){
    console.log("Inside catch ka callback i.e. fcb");
    console.log(error);
    console.log(pendingPromise);
});