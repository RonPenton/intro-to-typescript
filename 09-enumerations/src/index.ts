enum PlainEnum {
    value1, // assumed to be 0
    value2, // assumed to be 1
    value3  // assumed to be 2
}


var plain: PlainEnum;
plain = PlainEnum.value2;

// can convert plain enums to numbers
const n1: number = plain;

// and vice versa.
plain = 2;

// No protection against this, however. So beware!
plain = 4;

// can assign explicit values to enums. 
enum ExplicitEnum {
    value1 = 1,
    value2 = 2,
    value3 = 4,
    value4 = 8
}

// can assign strings to enums.
enum StringEnum {
    value1 = "Value 1",
    value2 = "Value 2",
    value3 = "Value 3"
}

var strenum: StringEnum;

strenum = StringEnum.value3;

// Can cast string enums to string.
const str: String = StringEnum.value2;

// Note: Cannot cast string to string enum!
strenum = "Value 1";


// Can convert enum value into label at runtime:
let nameOfEnum = PlainEnum[PlainEnum.value2];   // "value2"
// BEWARE: Not localization-friendly. I've not found this feature to be very useful in the real world.



// Most importantly: Can enumerate through enumeration.
for(let x in PlainEnum) {
    if(typeof PlainEnum[x] === 'number')
        console.log(x); // "value1", "value2", "value3"
}

for(let x in PlainEnum) {
    if(typeof PlainEnum[x] === 'string')
        console.log(x) // 0, 1, 2
}



// Type Enums:
type PlainTypeEnum = 0 | 1 | 2;
var x: PlainTypeEnum;

// not very useful because there's no labels attached to the numbers.
x = 2;  // What's 2?? Magic number!

// but at least it protects against rogue values. Unlike enums.
x = 3;  // error, 3 is not allowed. 



// Strings are far more useful:
type StringTypeEnum = "Value 1" | "Value 2" | "Value 3";

var y: StringTypeEnum;

y = "Value 1";

// Full type protection against misspellings:
y = "value 1";