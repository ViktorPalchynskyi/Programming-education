//Кратко - да, можем
let obj = new ConstructorExample();
let obj2 = new obj.constructor();
// Что касаемо примеров, когда код поведет себя правильно и неправильно:

//Правильно

function ConstructorExample() {
	this.isAdmin = true;
}

//Неправильно
// Не сработает, если мы изменим свойство constructor
