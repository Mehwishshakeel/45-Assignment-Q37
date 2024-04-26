"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// make a function with default message
function make_shirt(size = "Large", printmessage = "I love Typescript") {
    console.log(`The size of a shirt is ${size} and  ${printmessage}  print on it`);
}
// calling a function
make_shirt();
// calling with medium size and default message
make_shirt("medium");
// calling a function with different massage
make_shirt("small", "hello world");
