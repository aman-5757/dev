const fs = require("fs");

function myPromisifiedfun(filePath){
    return new Promise(function(resolve, reject){
        fs.readFile(filePath, function(error,data){
            if(error){
                // if file data failed ??
                reject(error);  //it will invoke fcb => failure callback
            }
            else{
                resolve("I have invoked resolve !!!");  // it will invoke scb => success callback
                // resolve(data);
            }
        })
    });
}




//Promise<Pending>
let pendingPromise = myPromisifiedfun("./f1.txt");
pendingPromise.then(function(data){
    console.log(data+"");
})

pendingPromise.catch(function(error){
    console.log(error);
})