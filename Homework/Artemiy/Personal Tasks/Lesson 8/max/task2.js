class BankAccount {
	constructor(balance) {
		this._balance = balance;
	}
	deposit(amount) {
		this._balance += amount;
	}

	withdraw(amount) {
		let res = this._balance - amount;
		if (res < 0) {
			console.log(
				`Не удалось снять деньги! Просьба найти работу за 8к кесов и сидеть на бабках:)`
			);
			return null;
		}
		this._balance = res;
		return this._balance;
	}
	_checkBalance() {
		return this._balance;
	}

	accountStatus() {
		return `Уважаемый клиент! На вашем счете на данный момент: ${this._checkBalance()}`;
	}

	static transfer(fromAccount, toAccount, amount) {
		if (toAccount.withdraw(amount)) {
			fromAccount.deposit(amount);
			console.log('Операция прошла успешно!');
			return;
		}
		console.log('Операция прошла неуспешно!');
	}
}

let veryRichDeveloper = new BankAccount(1000000);
let veryPoorJuniorDeveloper = new BankAccount(100000);

console.log('------ До перевода ------');
console.log(veryPoorJuniorDeveloper.accountStatus());
console.log(veryRichDeveloper.accountStatus());

BankAccount.transfer(veryRichDeveloper, veryPoorJuniorDeveloper, 10000);
BankAccount.transfer(veryRichDeveloper, veryPoorJuniorDeveloper, 1000000000);

console.log('------ После перевода ------');
console.log(veryPoorJuniorDeveloper.accountStatus());
console.log(veryRichDeveloper.accountStatus());
