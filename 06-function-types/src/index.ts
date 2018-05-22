// define a function type; this takes a string and number, and returns a number.
type mutater = (str: string, times: number) => string;


const multiplyString: mutater = (str, times) => {
    // cannot return a number. 
    return times;
}


const multiplyString2: mutater = (str, times) => {
    let output = "";
    for (let x = 0; x < times; x++) {
        output += str;
    }
    // forgot to return a result.
}


const multiplyString3: mutater = (str, times) => {
    let output = "";
    for (let x = 0; x < times; x++) {
        output += str;
    }
    return output;
    // This example is ok.
}

// Define a function with a differing signature 
function wrongMutator(str: string, times: number): number {
    return times;
}

// cannot assign wrongMutator because signature doesn't match.
const multiplyString4: mutater = wrongMutator;

// can copy the type of an existing function into a type to use later
type wrongMutatorType = typeof wrongMutator;

// use the newly stored type to link a new function to the type signature of the old function.
const notMultiplyString2: wrongMutatorType = (str, times) => {
    return Math.PI;
}