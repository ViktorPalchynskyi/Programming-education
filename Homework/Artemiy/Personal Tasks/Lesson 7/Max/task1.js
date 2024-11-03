let animal = {
	status: 'Alive',
	breathe() {
		console.log('Wo!');
	},
	live() {
		console.log('Life is amazing!');
	},
};

let bird = Object.create(animal, {
	breathe: {
		value() {
			console.log('I would like to breathe like a bird');
		},
	},
	fly: {
		value() {
			console.log("I'm in sky");
		},
	},
});

let sparrow = Object.create(bird, {
	breathe: {
		value() {
			console.log("I'm SPARROW!");
		},
	},
	color: {
		value: 'RED',
	},
});

animal.breathe();
bird.live();
sparrow.live();
sparrow.fly();
console.log(sparrow.color);
console.log(sparrow.status);
