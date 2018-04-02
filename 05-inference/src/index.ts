let number = 42;
let string = "Hello!";

number = "not a number";
string = 42;

function multiplyString(str: string, times: number) {
    let output = "";
    for (let x = 0; x < times; x++) {
        output += str;
    }
    return output;
}

function multiplyNumber(num1: number, num2: number) {
    return num1 * num2;
}

string = multiplyString("a", 5);
string = multiplyNumber(10, 20);

number = multiplyNumber(10, 20);
number = multiplyString("a", 5);
