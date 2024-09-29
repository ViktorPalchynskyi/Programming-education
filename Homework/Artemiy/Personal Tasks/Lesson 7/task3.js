function Person() {
	this.greet = function () {
		console.log('Hi!');
	};
	//Почему нельзя так: this.greet(){ //code }
}

function Student() {
	//(this._proto_ = new Person()), Почему так не работает?
	this.study = function () {
		console.log("I'm studying now");
	};
}
Student.prototype = new Person();
Student.prototype.constructor = Student;

let student = new Student();

student.study();
student.greet();
