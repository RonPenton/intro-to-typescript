// You can break TypeScript code intentionally. 
interface Animal {
    kingdom: string,
    phylum: string,
    class: string,
    order: string,
    family: string,
    species: string
};

// If you find yourself doing this, ask yourself "why?" and then cease doing it.
let animal: Animal = <Animal><any>(new Date());

// This code will crash at runtime. You're going to have a bad time.
console.log(animal.kingdom.toUpperCase());

// But you may not be able to avoid doing casts like this if you're getting data from a JSON endpoint.

// Simulate getting an invalid animal from an endpoint, missing the "order" property:
function pretendToGetJson(endpoint: String): Animal {
    console.log(endpoint);
    return <Animal>{
        kingdom: "Animalia",
        phylum: "Chordata",
        class: "Mammalia",
        //order: "Carnivora",
        family: "Ursidae",
        species: "U. maritimus"
    }
}

// "get" the JSON from the endpoint
animal = pretendToGetJson("http://bears.com/api/polar");

// How do we verify the object is valid?

// Use a type guard. 

// First, define a string type guard:
function isString(o: any): o is string {
    return o !== undefined && typeof (o) === 'string';
}

let o: any = 42;

if (isString(o)) {
    // "o" is narrowed to a "string" type within this block.
    o.toUpperCase();
}

// build on top of the previous type guard to define your Animal type guard:
function isAnimal(o: any): o is Animal {
    return o
        && isString((<Animal>o).kingdom)
        && isString((<Animal>o).phylum)
        && isString((<Animal>o).class)
        && isString((<Animal>o).order)
        && isString((<Animal>o).family)
        && isString((<Animal>o).species)
}

if (!isAnimal(animal)) {
    console.log("Not an animal!");
}
else {
    // now it's safe to use all the properties and pass the object all around your program.
    console.log(animal.order.toUpperCase());
}

