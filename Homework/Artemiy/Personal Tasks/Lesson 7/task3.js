function Person(name) {
	this.name = name;
}

Person.prototype.greet = function () {
	// метод создается один раз в прототипе
	console.log(`Hi, I'm ${this.name}!`);
};

function Student(name) {
	// А как будет работать тоже самое с примитивами? Например, как сейчас будет возвращаться имя студента. Необходимо добавить сохранение переменной name непосредственно в конструкторе Student. Можно повторить в точности код из конструктора Person, но тогда его можно будет удалить из Person. Это будет странно. Значит надо как-то переиспользовать код. Я нашел такое решение:
	Person.call(this, name);
}
Student.prototype = new Person();
Student.prototype.constructor = Student;
Student.prototype.study = function () {
	console.log("I'm studying now");
};

let student1 = new Student('Artem');
let student2 = new Student('Arina');

student1.study();
student1.greet();
student2.greet();
