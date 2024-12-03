// Создай класс Dog, который наследует от класса Animal, и реализуй в нём:
// переопределённый метод speak, который выводит в консоль "Dog barks",
// защищённое поле _breed для хранения породы собаки (с приватным доступом через соглашение).
// Задание: Создай экземпляр класса Dog, присвой ему имя и породу, вызови метод speak, а затем попробуй вывести значение породы через защищённое поле.
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
}
let dog = new Dog('Chepuhen');
console.log(dog.name);
dog.speak();
console.log(dog._breed);
console.log(dog.getBreed());
dog.setBreed('Gavkalo');
console.log(dog.getBreed());
// из-за использования _ порода псевдозащищена. Есть ли причина, по которой здесь не рекомендуется #?
