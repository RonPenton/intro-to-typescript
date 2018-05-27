// Part 1: Create a classical linked list implementation.

interface ListNode<T> {
    data: T;
    next: ListNode<T> | null;
}

// create a linked list using an array input.
function createList<T>(data: T[]): ListNode<T> | null {
    if (data.length == 0)
        return null;

    return {
        data: data.shift()!,
        next: createList(data)
    };
}

// iterate through the list using recursion.
function iterateList<T>(list: ListNode<T> | null, func: (t: T) => void) {
    if (!list)
        return;
    func(list.data);
    iterateList(list.next, func);
}

// iterate backwards through the list using post-order recursion.
function iterateListBackwards<T>(list: ListNode<T> | null, func: (t: T) => void) {
    if (!list)
        return;
    iterateListBackwards(list.next, func);
    func(list.data);
}

// create and print out a list of fibbionacci numbers. 
const list = createList([1, 1, 2, 3, 5, 8, 13]);
iterateList(list, t => console.log(t));

// Now use the same methods to create a list of words and print those out. 
const wordList = createList(["Spaniards", "the", "on", "mainly", "falls", "Spain", "in", "rain", "The"]);
let sentence = "";
iterateListBackwards(wordList, w => sentence += w + " ");
sentence = sentence.trim();
console.log(sentence);


// Part 2: Augment TypeScript features with generics. 
type Nullable<T> = T | null | undefined;

function printString(str: Nullable<string>) {
    if (str === undefined)
        console.log("Undefined!");
    else if (str === null)
        console.log("Null!!");
    else
        console.log("String Detected: " + str);
}

printString(undefined);
printString(null);
printString("Hola!");

