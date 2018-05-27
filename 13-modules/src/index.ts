// Import the *entire* "ramda" node library and assign it the name "R".
import * as R from 'ramda';

console.log(R.all(x => x > 0, [1, 2, 3, 4, 5]));



// Import only the object "axios" from Node library "axios"
import axios from 'axios';

axios.get("http://google.com");

// Import only "x", "e" and "double" from our local "helpers" library. Note the "./"
import { x, e, double } from './helpers';

console.log(e);
console.log(x.value);
x.value = 84;
console.log(x.value);

// Import the "default" interface "Fraction" from our local helpers library. Notice the lack of brackets. 
import Fraction from './helpers';

const fraction: Fraction = {
    numerator: 1,
    denominator: 2
};


// Import everything from helpers. Note that the default "Fraction" isn't imported. I mean. Whatever. 
import * as Helpers from './helpers';

console.log(Helpers.x.value);   // just to prove that we're seeing the same "x" from the same module, even though it has a different name now. 


// Import a string reverse method from a sub-library
import { reverse } from './utilities/StringUtilities';

console.log(reverse("hello"));