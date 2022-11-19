// console.log("hello");

// function userData() {
//     // setTimeout(callback, delay);
//     // delay is in milliseconds - for 1 secound - 1000 milliseconds
//     setTimeout(() => {
//         console.log("Inside settimeout");
//         return {
//             name: 'mohan',
//             age: '60'
//         }
//     }, 5000)
// }

// function dispayData() {
//     let data = userData(); // data is coming from another function
//     // process data
//     // document.getElementById('result').innerHTML = data;
//     console.log(data);
// }

// dispayData();

// function add(a,b) {
//     return a + b;
// }

// console.log(add(2,3));


// 2nd example


console.log("1");
setTimeout(()=> {
    console.log("2");
}, 5000);
console.log("3");
console.log("4");


let intervalTimer = setInterval(()=> {
    console.log("I wil come every 2 seconds");
},2000);

// clearInterval(intervalTimer);