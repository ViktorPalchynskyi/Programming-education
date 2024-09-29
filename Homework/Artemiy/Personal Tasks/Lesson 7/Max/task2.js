function World() {
	(this.name = 'Earth'),
		(this.population = 'About 8 milliards'),
		(this.spin = function () {
			console.log('Spining!');
		});
	this.russia = {
		population: '250 million',
	};
}

let methods = {
	stop() {
		console.log('Stop!');
	},
	start() {
		console.log('Start!');
	},
};

function extendObject(obj, methods = {}) {
	for (let method in methods) {
		obj.russia[method] = methods[method];
	}
}

let world = new World();
extendObject(world, methods);

world.russia.stop();
