let car = {
	brand: 'Mustang',
	startEngine() {
		console.log("Rrrr... Let's drive!");
	},
};

/*let electricCar = Object.create(car, {
	batteryLevel: {
		value: 80,
	},
});*/

let electricCar = Object.create(car);
electricCar.batteryLevel = 80;

console.log(electricCar.brand);
electricCar.startEngine();
console.log(electricCar.batteryLevel);
