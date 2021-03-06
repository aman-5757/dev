let a = 10;
let b = true;
let c = false;
let d = undefined;


console.log(a);
console.log(b,c);

for(let i = 0; i<10; i++){
    console.log(i);
}

//variable is not assigned a value
let e;  //takes up undefined
console.log(e);

if(true){
    // let f = "I am inside if block !!!";
  // console.log(f);
  // console.log(a);
  // a = 20;
}

// Const => Constant
const pi = 3.14;    //define
// pi = 20; // resassignment is not allowed in const
// console.log(pi);

// == (data type check nhi hota )  && === (data type check hota hai !!);
// console.log(  10 === "10" );

// Objects => key value pairs

// let movies = {}; // empty object


let data = {
    name: "Steve",
    place: "delhi",
    values:[
        10,
        false,
        {
            name: "Bob",
            place: "USA",
        },
        "hey",
        [1,2,3,4,5,6],
    ],
    movies :{
        name:"Captain America",
        rating:10
    }
};
// access object keys
// dot notation => literal check
// console.log(data.name);
// console.log(data.place);
let key = "name";
// data.key;
// console.log( key );

// bracket notation
// console.log(data[key]);

data.name = "I am a new Value";
// console.log(data);

// keys => unique
// values => duplicate

// Arrays

// int arr[] = [10,20,30,50];
// int arr[] = new int[10];

let values = [
  10,

  false,

  {
    name: "Steve Rogers",
    place: "Queens",
  },
  "Hey i am a value",
  [1, 2, 3, 4, 5, 6],
];

// console.log(values);
// console.log(values[2].place);


// in loop
for( let key in data ){
    console.log(key);
}