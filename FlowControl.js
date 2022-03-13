// The 5th section of the book

// 1. What values do the following expressions evaluate to?
false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // true
true && (1 + 2); // true
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true
// false     false                  true                false

/*

2. Write a function, evenOrOdd, that determines whether its argument is an even number. 
If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. 
For now, assume that the argument is always an integer. 

*/

let evenOrOdd = (number)=>{
    let intNumber = parseInt(number);
    if(intNumber%2 === 0){
        console.log(`Your number, ${intNumber} is even.`);
    }
    else{
        console.log(`Your number, ${intNumber} is odd.`);
    }
};
// evenOrOdd(3);
// evenOrOdd(2);

//3. Improve the function above to check if the input is an integer or not, if its not the function should issue an error msg and return 

let oddOrEven = (userNumber) => {
    if (userNumber === Number(userNumber)){
        if(userNumber % 2 === 0){
            console.log(`${userNumber} is even`);
        } else{
            console.log(`${userNumber} is odd`);
        }

    } else {
        console.log("Your input is invalid");
    }
};

oddOrEven(2);
oddOrEven(5);
oddOrEven("5");

/* 

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

*/

// 4. What does the following code log to the console and why?

function barCodeScanner(serial) {
    switch (serial) {
      case '123':
        console.log('Product1');
      case '113':
        console.log('Product2');
      case '142':
        console.log('Product3');
      default:
        console.log('Product not found!');
    }
  }
  
  barCodeScanner('113');

  /* ANS: The following code will log Product2 because switch cases are of strict equality and '113' is the same as the '113' in the 
  second case. 

  After running code: Product 2, 3, and not found will be logged because there is no break statement to exit the switch case after a match.
  It will go down the cases until it finishes them so that the program can exit the swithc case. JS does not care that there is match. ONly a break
  can make it exit the switch case.
 */

  //5. Refactor return foo() ? 'bar' : qux(); to use a if statement

//   if ("bar"){
//       return foo()
//   } else{
//       qux()
//   };

/*
if (foo()){
    return 'bar';
} else{
    return qux();
}

*/

//6. Whar does this code output?

function isArrayEmpty(arr) {
    if (arr) {
      console.log('Not Empty');
    } else {
      console.log('Empty');
    }
  }
  
  isArrayEmpty([]); //ANS is not empty because it isnt falsy even if the length property is 0

  /*7. Write a function that takes a string as an argument and returns an all-caps version of 
  the string when the string is longer than 10 characters. Otherwise, it should return the original string.
*/
  let capitalLetters = (word) =>{
      if (word.length > 10 ){
          return word.toUpperCase();
      } else {
          return word;
      }
  };

  console.log(capitalLetters("hello world"));
  console.log(capitalLetters('goodbye'));
  console.log(capitalLetters('Joe Thomas'));
  console.log(capitalLetters('Joe Stevens'));


  /*8 Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), 
  greater than 100, or less than 0.
  */

  let numberRange = (userNumber) => {
      if (userNumber >=0 && userNumber <= 50){
          console.log(`${userNumber} is between 0 and 50`);
      } 
      else if (userNumber >= 51 && userNumber <= 100){
          console.log(`${userNumber} is betwen 51 and 100`);
      }
      else if (userNumber > 100) {
          console.log(`${userNumber} is greater than 100`);
      }
      else if (userNumber < 0){
          console.log(`${userNumber} is less than 0`)
      }
  };

  numberRange(25);
  numberRange(75);
  numberRange(125);
  numberRange(-25);