# Example 1 - Setup

This example shows you how to compile your very first TypeScript app.

Use the following commands to run the example:

* `npm init`
* `npm install typescript –g`
* `tsc –init`
* `code .`

Now create a file named `index.ts`, containing the following code:

```
const n = "TypeScript";
console.log("Hello, " + n + "!");
```

Run the following on the command line:

```
tsc
node index.js
```

Examine the output file `index.js`.
