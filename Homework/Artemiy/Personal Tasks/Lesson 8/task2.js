import { Animal } from './task1.js';

class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this._breed = breed;
	}
	speak() {
		console.log('Dog barks');
	}

	get breed() {
		return this._breed;
	}

	set breed(newBreed) {
		if (newBreed.length < 11) {
			this._breed = newBreed;
		}
	}
	displayInfo() {
		console.log(super._getInfo());
	}
}

let dog = new Dog('Tobi', 'Ovcharka');

dog.speak();

console.log(dog._breed);

dog.breed = 'NEOvcharka';
console.log(dog.breed);
dog.displayInfo();

//В консоль сначала выводяться два сообщения из task1.js при импорте
