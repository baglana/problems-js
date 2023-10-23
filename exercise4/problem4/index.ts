interface Shape {
    getArea(): number;
}

// Update it as much as you want, just don't change the name
export class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

// Update it as much as you want, just don't change the name
export class Rectangle implements Shape {
    length: number;
    width: number;

    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

// Update it as much as you want, just don't change the name
export function sumOfAllAreas(...shapes: Shape[]) {
    return shapes.reduce((sum, shape) => {
        return sum + shape.getArea();
    }, 0);
}