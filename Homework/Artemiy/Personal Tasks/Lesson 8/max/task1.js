class Employee {
	constructor(name, salary) {
		this._name = name;
		this._salary = salary;
	}

	getDetails() {
		return `Employee: ${this._name}, Salary: ${this._salary}`;
	}

	static compareSalaries(emp1, emp2) {
		const res = emp1._salary - emp2._salary;
		if (res !== 0) {
			return res > 0 ? emp1._name : emp2._name;
		}
		return 'Зарплаты одинаковые';
	}
}

class Manager extends Employee {
	constructor(name, salary, department) {
		super(name, salary);
		this.department = department;
	}

	getDetails() {
		let departDetails = this.department
			? `Department: ${this.department}`
			: `Department is absent`;
		return `${super.getDetails()}, ${departDetails}`;
	}
}

class Developer extends Employee {
	constructor(name, salary, programmingLanguage) {
		super(name, salary);
		this.programmingLanguage = programmingLanguage;
	}

	getDetails() {
		let programmingLanguageDetails = this.programmingLanguage
			? `Programming Language: ${this.programmingLanguage}`
			: `Programming Language is absent`;
		return `${super.getDetails()}, ${programmingLanguageDetails}`;
	}
}

let manager = new Manager('Alexey', 200000, 'HR');
let developer = new Developer('Vitya', 800000, 'TechLead');

console.log(manager.getDetails());
console.log(developer.getDetails());
console.log(Employee.compareSalaries(manager, developer));
