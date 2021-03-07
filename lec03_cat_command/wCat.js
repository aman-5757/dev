let content = process.argv.slice(2);

let fs = require("fs");

// console.log(content);

let files = [];
let flags = [];

for(let i = 0; i<content.length; i++){
    //"-s"
    if(content[i].startsWith('-')){
        flags.push(content[i]);
    }
    else{
        files.push(content[i]);
    }
}


let fileKaData = "";
for(let i = 0; i<files.length; i++){
    
    fileKaData += fs.readFileSync( files[i] );
}
console.log(fileKaData);