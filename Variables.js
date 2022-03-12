//Second section of the book

/*

1. Write a program named greeter.js that greets Vicotr three timess
    notes: When building this I forgot the quotes around the string
2. Write a program named age.js that includes someone's age and then calculates and reports the future age in 10,20,30, & 40 years
3. What happens when you run :

{
  let foo = 'bar';
}

console.log(foo);

Why do we get that result?
ANS: The output will be an error because foo is out of scope for console.log. The scope for foo is only with the curly braces (block scope)


4. What happens when you run:

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

ANS: There will be no error when you run the code if let was used. Howeverm, with const, the first 3 times will run with Victor
     and then the last 3 times will cause an error because Joe cannot be assigned to the constant variable. 

5. What does this program log to console and why:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

ANS: It will log bar because outside of the {} foo is bar. It is only within the {} that the variable changes but once you are out 
     of the block scope, it will return back to bar

6. Will this program produce an error when run? WHy or why not?
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

I believe this will not cause an error because the constant FOO is assigned to bar and when console.log is run, it is calling for the 
FOO from outside the {}. The one inside {} is a different entity. An error would occur if everyting was done within the same scope.


*/