//Async keyword 
//Await keyword


// Async keyword => it can be used to make a async function
// Await keyword => it can be only used inside async function

//sync functions => they block stack


function sayHello(){
    console.log("fun say Hi");
}
sayHello();


//async function => they don't block stack, they are handelled by node APIs 

async function callMe(){
    console.log("I am a async function !!");
}


callMe();