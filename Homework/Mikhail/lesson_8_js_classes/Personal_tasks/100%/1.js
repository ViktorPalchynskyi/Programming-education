// Создай класс Animal, который будет иметь:
// поле name (название животного),
// метод speak, который выводит в консоль текст "Animal makes a sound",
// статический метод describe, который выводит текст "Animals are living creatures".
// Задание: Создай экземпляр класса Animal и вызови его методы, включая статический.
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
let animal = new Animal('Cow');
animal.speak();
Animal.describe();
console.log(animal.name);
