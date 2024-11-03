let animal = {
	jumps: null,
};

let rabbit = {
	__proto__: animal,
	jumps: true,
};

alert(rabbit.jumps); // ? (1) Ответ: true

delete rabbit.jumps;

alert(rabbit.jumps); // ? (2) Ответ: null

delete animal.jumps;

alert(rabbit.jumps); // ? (3) Ответ: undefined
