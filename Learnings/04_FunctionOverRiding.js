// Function OverRiding

function Animal(name) {
	this.name = name;
}

Animal.prototype.move = function () {
	console.log(`${this.name} is moving.`);
};

function Bird(name) {
	Animal.call(this, name); // Inherit from Animal
}

// Override the move method
Bird.prototype.move = function () {
	console.log(`${this.name} is flying.`);
};

// Create instances and call the move method
const myBird = new Bird("Dove");
const myAnimal = new Animal("Snail");
myBird.move(); // Output: Dove is flying.
myAnimal.move(); // Output: snail is moving.

// Functions Overloading
function overloadedFunction() {
	console.log("No arguments provided.");
}
overloadedFunction.overload1 = function (arg1) {
	console.log(`Argument 1: ${arg1}`);
};
overloadedFunction.overload2 = function (arg1, arg2) {
	console.log(`Argument 1: ${arg1}`);
	console.log(`Argument 2: ${arg2}`);
};
// Call the overloaded function with different arguments
overloadedFunction();
overloadedFunction.overload1("Argument Value 1");
overloadedFunction.overload2("Argument Value 1", "Argument Value 2");
