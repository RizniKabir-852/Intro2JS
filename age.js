// This is the second question in the variable section

// const age = 23;

// console.log(`You are ${age} years old.`)
// console.log(`In 10 years, you will be ${10+age} years old.`);
// console.log(`In 20 years, you will be ${20+age} years old.`);
// console.log(`In 30 years, you will be ${30+age} years old.`);
// console.log(`In 40 years, you will be ${40+age} years old.`);


// This is the third question in the input/output section of the book

let rlSync = require('readline-sync');

// let age = rlSync.question("How old are you?\n");

// console.log(`You are ${age} years old.`)
// console.log(`In 10 years, you will be ${10+age} years old.`);
// console.log(`In 20 years, you will be ${20+age} years old.`);
// console.log(`In 30 years, you will be ${30+age} years old.`);
// console.log(`In 40 years, you will be ${40+age} years old.`);
// This way will return a string because the user input in the age variable is a string and not a number

let age = rlSync.question("How old are you?\n");
age = parseInt(age);
// or you can do let age = Number(rlSync.question("How old are you?\n");)

// console.log(`You are ${age} years old.`)
// console.log(`In 10 years, you will be ${10+age} years old.`);
// console.log(`In 20 years, you will be ${20+age} years old.`);
// console.log(`In 30 years, you will be ${30+age} years old.`);
// console.log(`In 40 years, you will be ${40+age} years old.`);


//This is the first question in the Loops & Iterating section

//while loop method
let counter = 10;

// while(counter <41){
    if(counter === 10){
        console.log(`You are ${age} years old.`);
        console.log(`In ${counter} years, you will be ${counter+age} years old.`);
        counter +=10;
    }
    else {
        console.log(`In ${counter} years, you will be ${counter+age} years old.`);
        counter +=10;
    }
}

//for loop method
// time = [10,20,30,40];

// for(let index = 0; index < time.length; index +=1){
//     if(time[index] === 10){
//         console.log(`You are ${age} years old.`);
//         console.log(`In ${time[index]} years, you will be ${time[index]+age} years old.`);
//     }
//     else{
//         console.log(`In ${time[index]} years, you will be ${time[index]+age} years old.`);
//     }
// }

//#3 ANS
// for (let future = 10; future <= 40; future += 10) {
//     console.log(`In ${future} years, you will be ${age + future} years old.`);
//   }


