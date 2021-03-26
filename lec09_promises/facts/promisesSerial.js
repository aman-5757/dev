// promises hell --> We have to use Promises Chaining


//multiple files
//promised fuction
// read files seriallly

const fs = require("fs");

let f1KaPendingPromise = fs.promises.readFile("./f1.txt");

f1KaPendingPromise.then(function(data){
    console.log(data+"");
    let f2KaPendingPromise = fs.promises.readFile("./f2.txt");
    f2KaPendingPromise.then(function(data){
        console.log(data+"");
        let f3KaPendingPromise = fs.promises.readFile("./f3.txt");
        f3KaPendingPromise.then(function(data){
            console.log(data+"");
        })
    } )
})