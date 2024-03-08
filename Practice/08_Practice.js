// Check if a given number is armstrong number of not.
// An armstrong number is a number which is equal to the sum of the cubes of the digits

const prompt = require('./../app/controllers/getInput');

let num = prompt('Enter number: ');

num = parseInt(num);
if (isNaN(num)) {
    console.log('Please enter a valid number');
    process.exit(1);
}

let sum = 0, temp = num;
while(num != 0) {
    
    let digit = num % 10;
    num = Math.floor(num/10);
    sum += ((digit) * (digit) * (digit));
}

sum = parseInt(sum);

console.log(temp, sum);
if (temp == sum) {
    console.log(`${temp} is an armstrong number`);
}
else {
    console.log(`${temp} is not an armstrong number`);
}
