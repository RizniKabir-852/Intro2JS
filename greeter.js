// First question in the variable section of the book

// let rlSync = require('readline-sync');

// const firstName = 'Victor';

// console.log(`Good Morning, ${firstName}.`);
// console.log(`Good Afternoon, ${firstName}.`);
// console.log(`Good Evening, ${firstName}.`);

// let userName = rlSync.question("What's your name?\n");
// console.log(`Good morning, ${userName}`);

//First question in the input/output section of the book 

let rlSync = require('readline-sync');

// let name = rlSync.question("What's your name?\n");
// console.log(`Hello, ${name}`);

//Second question in the input/output section of the book

let fName = rlSync.question("What's your first name?\n");
let lName = rlSync.question("What's your last name?\n");

let fullName = fName + " " + lName;

console.log(`Hello, ${fullName}`);