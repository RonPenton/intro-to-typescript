export abstract class Animal {
    constructor(public type: string, public name: string) {}

    public breate(): void {
        console.log("I'm breathing!");
    };

    public abstract move(): void;
}

class Dog extends Animal {
    constructor(name: string) {
        super("dog", name);
    }

    public move(): void {
        console.log("I'm walking! Ruff!");
    }
}

class Bird extends Animal {
    constructor(name: string) {
        super("bird", name);
    }

    public move(): void {
        console.log("I'm flying!");
    }
}

function MoveAnimalTwice(animal: Animal) {
    animal.move();
    animal.move();
}

const bird = new Bird("Tweety");
const dog = new Dog("Rover");

bird.move();
dog.move();


MoveAnimalTwice(bird);
MoveAnimalTwice(dog);





// ******************************************************************************************
// PART 2
// ******************************************************************************************

enum ImageFormat {
    BMP, 
    TIFF,
    GIF
}

class Bitmap {
    constructor() {
        this.pixels = [];
    }

    public pixels: number[];

    public SaveToFile(format: ImageFormat, filename: string) {
        switch(format) {
            case ImageFormat.BMP: 
                // TODO
                break;
                case ImageFormat.TIFF: 
                // TODO
                break;
                case ImageFormat.GIF: 
                // TODO
                break;
        }
    }
}

// Publish class in a library. 
// Later on, someone wants to add support to Save as PNG.
// What now?



interface IBitmap {
    pixels: number[];
}

function BitmapToBMP(bitmap: IBitmap, filename: string) {
    // TODO
}

function BitmapToTIFF(bitmap: IBitmap, filename: string) {
    // TODO
}

function BitmapToGIF(bitmap: IBitmap, filename: string) {
    // TODO
}

// In some other library:
function BitmapToPNG(bitmap: IBitmap, filename: string) {
    // TODO
}