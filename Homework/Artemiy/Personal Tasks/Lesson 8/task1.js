export class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log('Animal makes a sound');
	}

	static describe() {
		console.log('Animals are living creatures');
	}

	_getInfo() {
		//Не до конца понимаю. Защищенные методы в JS защищены только на словах?
		return 'This is an animal';
	}
}

let animal = new Animal('Tiger');
animal.speak(); // Находим метод в Animal.prototype
Animal.describe(); //Вызывается не от объекта, а от самого класса
