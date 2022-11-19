// synchronous


function userData() {
    return {
        name: 'mohan',
        age: '60'
    }
}

function dispayData() {
    let data = userData(); // data is coming from another function
    // process data
    // document.getElementById('result').innerHTML = data;
    console.log(data);
}

dispayData();

function add(a,b) {
    return a + b;
}

add();

// what if the data is supposed to come from backend or server?

// The data may not come on time because of network delays and server delays

// this is asynchronous behaviour

// Lets say my JS file is having 10,000 lines of code

// Now, there is a function which should call API or backend at line 5.
// If I wait for lets say 5 mins for the response, all my remaining 9995 lines of code
// will wait for 5 mins.

// In such situations, JS will handle such code asynchronously. It will not wait and instead
// proceed with next lines of code.
//Once the API call cones back with a response, then corresponding dependant code will be executed