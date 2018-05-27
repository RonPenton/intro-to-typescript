
// define a function that takes a number:
function square(n: number): number {
    return n * n;
}

// try to pass a null:
square(null);

// try to pass undefined:
square(undefined);

// define a function that can handle null, but not undefined:
function square2(n: number | null): number {
    // error! n could be null, thus we cannot multiply it yet.
    return n * n;
}


function square3(n: number | null): number {
    if (n) return n * n;

    // error! Cannot return null.
    return null;
}

// typing "number | null" is tedious, define a type:
type NullNumber = number | null;

function square4(n: NullNumber): NullNumber {
    if (n) return n * n;
    return null;
}

// undefined still doesn't work:
square4(undefined);

// need to add that to the type:
type ReallyNullNumber = NullNumber | undefined; // equivalent to "number | null | undefined"

function square5(n: ReallyNullNumber): NullNumber { // no need to use "ReallyNullNumber" for return value, we don't ever return undefined. 
    if (n) return n * n;
    return null;
}

square5(undefined);


// null checking "narrows" a type inside a function.
function square6(n: ReallyNullNumber): ReallyNullNumber {
    if (n === null)
        return null;
    // typeof(n) = number | undefined
    
    if(n === undefined)
        return undefined;
    // typeof(n) = number

    return n * n;
}