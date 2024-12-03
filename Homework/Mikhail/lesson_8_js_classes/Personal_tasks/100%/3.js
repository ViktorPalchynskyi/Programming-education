// Добавь в класс Animal защищённый метод _getInfo, который возвращает строку "This is an animal" и может вызываться только внутри класса или его наследников.
// Задание: Создай в классе Dog метод displayInfo, который использует _getInfo и выводит результат в консоль. Создай экземпляр Dog и вызови метод displayInfo.
class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log('Animal makes a sound');
	}
	static describe() {
		return console.log('Animals are living creatures');
	}
	_getInfo() {
		return 'This is an animal';
	}
}
class Dog extends Animal {
	speak() {
		console.log('Dog barks');
	}
	_breed = 'Chepuha-hua';
	getBreed() {
		return this._breed;
	}
	setBreed(newBreed) {
		return (this._breed = newBreed);
	}
	displayInfo() {
		console.log(`${this.name} says: ${this._getInfo()}`);
	}
}
let dog = new Dog('Barbos');
dog.displayInfo();
