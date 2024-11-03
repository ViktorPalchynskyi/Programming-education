let animal = {
	makeSound() {
		console.log("I'm animal");
	},
};
/*let dog = Object.create(animal, {
	makeSound: {
		value() {
			console.log('Woof!');
		},
	},
});*/

let dog = Object.create(animal);
dog.makeSound = () => {
	console.log('Woof!');
};
/*let dog = {
	makeSound() {
		console.log('Woof!');
	},
};

Object.setPrototypeOf(dog, animal);
*/

animal.makeSound();
dog.makeSound();
