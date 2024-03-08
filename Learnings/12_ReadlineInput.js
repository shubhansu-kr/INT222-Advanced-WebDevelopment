// Use ReadLine input to take year input from user and check if it's a leap year

const Readline  = require("readline");

const input = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let year = 0;

const setInput = () => {
    input.question('Enter a year: ', (userInput) => {
        userInput = parseInt(userInput);
        if (isNaN(userInput)) {
            console.log('Enter a valid Input');
            process.exit(1);
        }
    
        year = parseInt(userInput);
    
        input.close();

        if (isLeapYear(year)) {
            console.log(`${year} is a leap year`);
        }
        else {
            console.log(`${year} is not a leap year`);
        }
    });
}

const isLeapYear = (year) => {
    return year % 4 == 0;
}

setInput();


