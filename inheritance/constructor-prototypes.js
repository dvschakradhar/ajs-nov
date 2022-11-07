// I want to have a collection of boxes
// I can store them in an array

// My box has a value and a method to print it


// const boxes = [
//         { value: 1, getValue() { return this.value; } },
//         { value: 2, getValue() { return this.value; } },
//         { value: 3, getValue() { return this.value; } },
//       ];

// better version

// const boxPrototype = {
//     getValue() { return this.value+1; },
//   };
    
//   const boxes = [
//     { value: 1, __proto__: boxPrototype },
//     { value: 2, __proto__: boxPrototype },
//     { value: 3, __proto__: boxPrototype },
//   ];

// A better way


  function Box(value) {
    this.value = value;
    }

    // Properties all boxes created from the Box() constructor
    // will have
    Box.prototype.getValue = function () {
    return this.value;
    };

    Box.prototype.sayHi = function() {
    console.log("Hi there!");
    }

    const boxes = [
    new Box(1),
    new Box(2),
    new Box(3),
    ];





        