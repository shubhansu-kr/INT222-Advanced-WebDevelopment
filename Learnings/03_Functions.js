greet(3,6);
function greet(n,n1) {
    console.log(n+n1)
    console.log('Hello User');
}

greet();
greet('Shubh');

// This function overwrites the prev Function.
function greet(nm) {
    console.log('Hello User : ' + nm);
}

greet('Shubh');