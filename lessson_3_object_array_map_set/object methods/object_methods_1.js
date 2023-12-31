// https://learn.javascript.ru/task/object-property-this
// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
	return {
		name: 'John',
		ref: this,
	};
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?
// there will be no result. The name value for the ref is not set.
