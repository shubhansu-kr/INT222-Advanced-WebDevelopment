// Prints 21

let x = 21;
{
	console.log(x);
}

// Error: y is not defined.

// {
// 	console.log(y);
// }
// let  = 21;

// 

var a = Array(1, 2, 3);
var b = [1, 2, 3];

// a and b are objects
console.log(a, typeof(a));
console.log(b, typeof(b));

// Still b is an object
b = null 
console.log(b, typeof(b));

// b is not an object anymore. It's undefined.
b = undefined
console.log(b, typeof(b));


// [ 1, 2, 3, 'hell', <1 empty item>, null, undefined, 21 ]
// double comma renders an empty item.
var c = [1, 2, 3, 'hell', , null, undefined, z = 21];
console.log(c);

// [ <11 empty items> ]
var d = [,,,,,,,,,,,];
console.log(d);

// Objects: 
var e = {
    name: 'shubh',
    age: 21
};
console.log(e, typeof(e));

var f = [{name: 'shubh'}, {name: 'ayush', age: 21}];
console.log(f, typeof(f));

console.table(e);
console.table(f);
console.table(c);
console.table(d);