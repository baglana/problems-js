class Shape {
    getArea() {
        return 0;
    };
}

// Update it as much as you want, just don't change the name
export class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

// Update it as much as you want, just don't change the name
export class Rectangle extends Shape {
    length: number;
    width: number;

    constructor(length: number, width: number) {
        super();
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

// Update it as much as you want, just don't change the name
export function sumOfAllAreas(...shapes: Shape[]) {
    return shapes.reduce((sum: number, shape: Shape) => {
        return sum + shape.getArea();
    }, 0);
}
