Function.prototype.defer = function (ms) {
	let f = this;
	console.log(f);
	return function (...args) {
		setTimeout(() => {
			console.log(this);
			f.apply(this, args);
		}, ms);
	};
};

// check it
function f(a, b) {
	console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
