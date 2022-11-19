// what is a promise
// Describing something that will be returned in future
// Till that time, the promise is in pending state
//The outcomes of the promise could be
// 1. Fulfilled- positive outcome
// 2. rejected - negative outcome


// IN JS

// A promise is an object which will eventuallly be fulfilled or rejected.
// THe promise will be one of the 3 states at a time

// PENDING
// FULFILLED or RESOLVED
// REJECTED

// how to create a promise?

// new Promise();

// function userData() {
//     // setTimeout(callback, delay);
//     // delay is in milliseconds - for 1 secound - 1000 milliseconds
//     // setTimeout(() => {
//     //     console.log("Inside settimeout");
//     //     return {
//     //             name: 'mohan',
//     //             age: '60'
//     //         }
//     // }, 5000)

//     return new Promise((resolved, rejected)=> {
//         return setTimeout(() => {
//                 console.log("Inside settimeout");
//                 resolved( {
//                         name: 'mohan',
//                         age: '60'
//                     })
//             }, 5000)

//     })
// }
    
// function dispayData() {
//     let data = userData(); // data is coming from another function
//     // process data
//     // document.getElementById('result').innerHTML = data;
//     console.log(data);
// }

// dispayData();

// normal function
// function add(a,b) {
//     return a+b;
// }

//arrow function
// let add = (a,b) => a+b;

//example 2;


// console.log(data);

// I gave a promise. How do I get the info from it?

// .then() will handle resolved response
//.catch() will handle rejected response


let data = new Promise((resolved, rejected)=>{
    // resolved({
    //             name: 'mohan',
    //             age: '60'
    //         });

    rejected('Error!');
});

// data.then(abrakadabra => console.log(abrakadabra))

data.then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err);
}).finally(function() {
    console.log("In finally");
})







    