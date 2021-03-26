const fs = require("fs");

let f1KaPendingPromise = fs.promises.readFile("./f1.txt");
let f2KaPendingPromise = fs.promises.readFile("./f2.txt");
let f3KaPendingPromise = fs.promises.readFile("./f3.txt");

f1KaPendingPromise.then(scb);
f1KaPendingPromise.catch(fcb);


f2KaPendingPromise.then(scb);
f2KaPendingPromise.catch(fcb);


f3KaPendingPromise.then(scb);
f3KaPendingPromise.catch(fcb);

function scb(data){
    console.log(data+"");
}

function fcb(error){
    console.log(error);
}