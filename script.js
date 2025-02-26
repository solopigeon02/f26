/* for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 &&  i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}; */


/* let mark = 70;

if (mark > 0 || mark < 100) {
    if (mark < 60) {
        console.log("your grade is 'F'.");
    }
    else if (mark < 70) {
        console.log("your grade is 'D'.");
    }
    else if (mark < 80) {
        console.log("your grade is 'C'.");
    }
    else if (mark < 90) {
        console.log("your grade is 'B'.");
    }
    else {
        console.log("your grade is 'A'.");
    }
} */

/* let x = [1,2,3,4,5,6];
let sum = 0;
for (let i = 0; i < x.length; i++) {
    sum = sum + x[i]
};
console.log(sum) */

let a = [12,34,56,1];
let highest = 0;

for (let i = 0; i < a.length; i++) {
    if (highest < a[i]) {
        highest = a[i];
    }
};
console.log(highest)