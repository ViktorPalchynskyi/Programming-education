// Создай абстрактный класс Shape (считай его абстрактным, добавив к комментарию) с:

// защищённым полем _color (цвет фигуры),
// методом area, который должен быть реализован в наследниках,
// статическим методом describeShape, который выводит текст "Shapes have area and color".
// Затем создай два наследника:

// Circle, который имеет поле radius и реализует метод area, возвращая площадь круга.
// Rectangle, который имеет поля width и height и реализует метод area, возвращая площадь прямоугольника.
// Задание: Создай массив фигур с разными цветами и параметрами, затем выведи площади всех фигур. Также, вызови describeShape для класса Shape.

class Shape {
	constructor(color) {
		if (new.target === Shape) {
			throw new Error('Cannot instantiate an abstract class.');
		}
		this._color = color;
	}

	area() {
		throw new Error("Method 'area()' must be implemented in subclass");
	}

	static describeShape() {
		console.log('Shapes have area and color');
	}
}

class Circle extends Shape {
	constructor(color, radius) {
		super(color);
		this.radius = radius;
	}

	area() {
		return Math.PI * this.radius ** 2;
	}
}

class Rectangle extends Shape {
	constructor(color, width, height) {
		super(color);
		this.width = width;
		this.height = height;
	}

	area() {
		return this.width * this.height;
	}
}

const shapes = [
	new Circle('red', 10),
	new Rectangle('blue', 5, 8),
	new Circle('green', 7),
	new Rectangle('yellow', 10, 12),
];

shapes.forEach((shape, index) => {
	console.log(
		`Shape ${index + 1} (${shape.constructor.name} - ${
			shape._color
		}): Area = ${shape.area()}`
	);
});

Shape.describeShape();
