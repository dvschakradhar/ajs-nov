//closure is a very imp topic - interviews

// function add(a, b) {
//     return a + b;
// }

function parent() {

    let familyName = "mishra";

    function child() {
        console.log(familyName);
    }
    child();
}

parent();


function parent() {

    let familyName = "mishra";

    function child() {
        console.log(familyName);
    }
    return child; // kicking him out of house
}

let guy = parent();

guy();

// closure - A function bundled together with its lexical scope









