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