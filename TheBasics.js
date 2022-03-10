//EXERCISES 

//1. Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value

const firstName = 'Rizni';
const lastName = 'Kabir';

const fullName = firstName + " " +lastName;

console.log(fullName);

//2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936

const myNumber = 1234;

const onesPlace = myNumber % 10;
console.log(onesPlace);

const tensPlace = (myNumber/10)%10;
console.log(parseInt(tensPlace));

const hundredsPlace = ((myNumber/10)/10) % 10;
console.log(parseInt(hundredsPlace));

const thousandsPlace = ((((myNumber/10)/10))/10) % 10;
console.log(parseInt(thousandsPlace));

let newNumber = (myNumber - onesPlace) / 10;
console.log(newNumber);


//3.  Identify the data type for each of the following values:

console.log(typeof 'true'); //string
console.log(typeof false); //boolean
console.log(typeof 1.5); //number
console.log(typeof 2); //number
console.log(typeof undefined) // nan 
//my ans is wrong, its undefined
console.log(typeof {foo:'bar'}) //object


//4. Explain why this console.log('5'+10) logs '510' instead of 15 
//ANS. because the engine implicitly coerces the number 10 into a string 10 and then it concatenates it to 5. Making 510

//5. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead

const fifteen = parseInt('5')+10;
console.log(fifteen);

//6. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console

console.log(`The value of 5 + 10 is ${fifteen}.`);

//7. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array?
//ANS. Yes because the index will be out of the range of the array.  ...WRONG
//Acutal ANS. No because you will just be given undefined as that index hasn't been defined yet


//8. Create an array named names that contains a list of pet names

let pets = ['asta','butterscotch','pudding'];
console.log(pets);

//9. Create an object named pets that contains a list of pet names and the type of animal

let breeds = {
    asta : 'dog',
    butterscotch: 'cat',
    pudding: 'cat',
};


//10.  What value does'foo' === 'Foo' evaluate to? 
//ANS. it will evaluate to false because f is not the same as F


//11. What does parseInt('3.1415') eveluate to?
//ANS. it evaluates to 3 since . is not a number 

//12. What does '12' < '9' evaluate to?
//ANS. It depends on the ASCII table value for the respective characters. It will be true because 1 is less than 9 so 12 is less than 9 