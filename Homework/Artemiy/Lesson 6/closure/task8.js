function inBetween(a, b) {
	return element => {
		return a <= element && element <= b;
	};
}
function inArray(arr) {
	return element => {
		return arr.includes(element);
		/*let status = false;
		arr.forEach(arrNum => {
			if (element === arrNum) {
				status = true;
			}
		});
		return status;
	};*/
	};
}
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
