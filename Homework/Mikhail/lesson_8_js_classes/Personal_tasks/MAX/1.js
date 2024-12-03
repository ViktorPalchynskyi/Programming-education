// Создай базовый класс Employee, который будет иметь:

// защищённое поле _name (имя сотрудника),
// защищённое поле _salary (зарплата сотрудника),
// метод getDetails, который возвращает строку в формате "Employee: [name], Salary: [salary]",
// статический метод compareSalaries(emp1, emp2), который сравнивает зарплаты двух сотрудников и выводит имя сотрудника с более высокой зарплатой.
// Создай два наследника:

// Manager, который добавляет поле department (отдел) и переопределяет метод getDetails так, чтобы включить отдел в описание.
// Developer, который добавляет поле programmingLanguage (основной язык программирования) и переопределяет метод getDetails, чтобы включить язык программирования в описание.
// Задание: Создай экземпляры Manager и Developer, вызови для них метод getDetails, а также используй compareSalaries для сравнения их зарплат.
class Employee {
	constructor(name, salary) {
		this._name = name;
		this._salary = salary;
	}
	getDetails() {
		return `Employee: ${_name}, Salary: ${_salary}`;
	}
	static compareSalaries(emp1, emp2) {
		return emp1._salary > emp2._salary
			? console.log(`${emp1._name}`)
			: console.log(`${emp2._name}`);
	}
}
class Manager extends Employee {
	constructor(name, salary, dep) {
		super(name, salary);
		this.department = dep;
	}
	getDetails() {
		return `Employee: ${this._name}, Salary: ${this._salary}, Department: ${this.department}`;
	}
}
class Developer extends Employee {
	constructor(name, salary, lang) {
		super(name, salary);
		this.programmingLanguage = lang;
	}
	getDetails() {
		return `Employee: ${this._name}, Salary: ${this._salary}, ProgrammingLanguage: ${this.programmingLanguage}`;
	}
}
let manager = new Manager('John', 35000, 'marketing');
let developer = new Developer('Adolf', 999000, 'JS');
console.log(manager.getDetails());
console.log(developer.getDetails());
Employee.compareSalaries(manager, developer);
