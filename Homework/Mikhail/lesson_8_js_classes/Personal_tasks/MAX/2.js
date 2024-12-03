// Создай класс BankAccount, который будет иметь:

// приватное поле _balance (баланс счёта),
// метод deposit(amount), который увеличивает баланс на amount,
// метод withdraw(amount), который уменьшает баланс на amount при условии, что amount не превышает текущий баланс,
// защищённый метод _checkBalance, который возвращает текущий баланс,
// статический метод transfer(fromAccount, toAccount, amount), который переводит amount с одного счёта на другой, если баланс позволяет.
// Задание: Создай два объекта BankAccount с начальными балансами. Попробуй использовать метод transfer, чтобы перевести средства с одного счёта на другой. Проверь баланс каждого счёта до и после перевода, используя доступ к методу _checkBalance через любой доступный способ в рамках классовой структуры.
class BankAccount {
	constructor(balance) {
		this._balance = balance;
	}
	deposit(amount) {
		this._balance += amount;
	}
	withdraw(amount) {
		this._balance > amount
			? (this._balance -= amount)
			: console.log('Недостаточно средств');
	}
	_checkBalance() {
		return this._balance;
	}
	static transfer(fromAccount, toAccount, amount) {
		if (fromAccount._balance >= amount) {
			fromAccount._balance -= amount;
			toAccount._balance += amount;
			console.log(`Перевод ${amount} выполнен успешно`);
		} else {
			console.log('Недостаточно средств для перевода');
		}
	}
	getBalance() {
		return this._checkBalance();
	}
}

let bankAccount1 = new BankAccount(1000);
let bankAccount2 = new BankAccount(5000);
console.log(bankAccount1.getBalance());
console.log(bankAccount2.getBalance());
BankAccount.transfer(bankAccount2, bankAccount1, 10000);
console.log(bankAccount1.getBalance());
console.log(bankAccount2.getBalance());
BankAccount.transfer(bankAccount2, bankAccount1, 1000);
console.log(bankAccount1.getBalance());
console.log(bankAccount2.getBalance());
