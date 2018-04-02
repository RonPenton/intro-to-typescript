const number: number = 42;
const string: string = "Hello!";
console.log(number);
console.log(string);


function multiplyString(str: string, times: number): string {
    let output = "";
    for (let x = 0; x < times; x++) {
        output += str;
    }
    return output;
}

const m = multiplyString("a", 5);
console.log(m);