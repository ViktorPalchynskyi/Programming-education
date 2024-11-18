class AbstractError extends Error {
	constructor(message) {
		this.message = message;
		this.name = 'AbstractError';
	}
}

class Shape {
	constructor(color) {
		this._color = color;
		if (new.target === Shape) {
			throw new AbstractError(
				'It is forbidden to create an object of an abstract class or call its methods.'
			);
		}
	}
	area() {
		throw new AbstractError(
			'It is forbidden to create an object of an abstract class or call its methods.'
		);
	}
	static describeShape() {
		console.log('Shapes have area and color');
	}
}

class Circle extends Shape {
	constructor(color, radius) {
		super(color);
		this.radius = radius < 0 ? 0 : radius;
	}

	area() {
		return Math.PI * Math.pow(this.radius, 2);
	}
}

class Rectangle extends Shape {
	constructor(color, width, height) {
		super(color);
		this.width = width < 0 ? 0 : width;
		this.height = height < 0 ? 0 : height;
	}

	area() {
		return this.height * this.width;
	}
}

try {
	let shapes = [
		new Rectangle('green', 10, 10),
		new Rectangle('blue', 7, 12),
		new Circle('red', 5),
		new Rectangle('purple', 11, 1),
		new Circle('white', 8),
	].map(shape => console.log(shape.area()));
} catch (err) {
	console.log(err.message);
}

Shape.describeShape();
