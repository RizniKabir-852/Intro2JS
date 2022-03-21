// Chapter 7: Arrays

//1. what are the final length values for array1, array2, array3, array4, and array5 ?

/* 
let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;
*/

/* Answer to Q1

array1 has a length of 4 
- undefined takes up a the space of array1[2]. That space is just not initialsied 

array2 has a length of 5
- it originally had a length of 1 but by assigning 5 to the length of the array, 4 more spaces were added into the list. 

array3 has a length of 0
- you cannot access an index with a negative number   

array4 has a length of 3
- it removes everything in the list after the lenghtof 3

array5 has a length of 101
- since the 100th index was picked inside an empty list, 100 spaces were created and the length of the list is the last index + 1

*/

//2. Log all of the even values from myArray to the console.

let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

//method 1
// myArray.forEach(function(num){
//   if(num % 2 === 0){
//     console.log(num)
//   }
// });

//method 2
// for(i = 0; i < myArray.length; i += 1){
//   if(myArray[i] % 2 === 0){
//     console.log(myArray[i])
//   }
// };

//method3
// let i = 0
// while(i < myArray.length){
//   if(myArray[i] % 2 === 0){
//     console.log(myArray[i])
//     i += 1
//   }
//   else{
//     i += 1
//   }
// };

//3. we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array

let myNestedArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for(i = 0; i < myNestedArray.length; i += 1){        // The first for loop accesses the first layer of the array
  for(x = 0; x < myNestedArray[i].length; x+=1 ){    // The second for loop accesses the inner loop where the values are
    if(myNestedArray[i][x] % 2 === 0){ 
      console.log(myNestedArray[i][x])
    }                                                // Go through the inner loop to check, if everything is checked go to the outer loop and go to the next inner array
  }
};

/* 

4. use the map function to create a new array that contains one element for each element in the original array. 
If the element is an even value, then the corresponding element in the new array should contain the string 'even'; 
otherwise, the element in the new array should contain 'odd' 

*/

// let newArray = myArray.map((num) =>{
//   if(num % 2 === 0 ){
//     return "even";
//   }
//   else {
//     return "odd"; 
//   }
// });

// console.log(newArray);


/*

5. Write a findIntegers function that takes an array argument and returns an array that contains only the integers 
from the input array. Use the filter method in your function.

*/

//INITIAL ANSWER
// let findIntegers = (userArray) => {

//   return userArray.filter(value =>{
//     if(typeof value === 'number'){
//       return value;
//     }
//   })

// }; 

//MODIFIED ANSWER
// let findIntegers = (userArray) => {

//   userArray.filter(value => {
//     return Number.isInteger(value);
//   });
// }

//BOOK ANSWER
let findIntegers = (list) =>{
  return list.filter(val => {
    return Number.isInteger(val);
  });
}
 
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

//My findings, in the function, you need to return the filtered list and not just the items in the list 

/*
6. Use map and filter to first determine the lengths of all the elements in an array of string values, 
then discard the even values (keep the odd values).
*/
oddLengths = (list) => {
  let newList = list.map(val => val.length);

  return newList.filter(index =>{
    return index % 2 !== 0;
  })

};

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]




