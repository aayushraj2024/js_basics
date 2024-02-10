// program to swap to variables

let a = 12;
let b = 34;

console.log(`After swapping a = ${a}, b = ${b}`);

let temp = a;
a = b;
b = temp;

console.log(`After swapping a = ${a}, b = ${b}`);

let c = 12;
let d = 34;

console.log(`After swapping c = ${c}, d = ${d}`);

// using destructuring assignment
[c, d] = [d, c];
/*
    first a temporary array [d, c] is created, here the value of [d, c] will be [34, 12]
    then destructring of the array is done [c, d] ==> [34, 12]
*/

console.log(`After swapping c = ${c}, d = ${d}`);
