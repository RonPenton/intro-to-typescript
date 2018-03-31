# Example 2 - Build

The previous example was simple, in order to demonstrate the basics of setting up an NPM package. In a real-world app, however, you will want to have a more complex build system setup that interacts well with source control. This sample shows you the recommended setup for a basic TypeScript app that will grow beyond a single file.

This example and all that follow it will build upon the concepts learned in previous examples, and so will have many of the previous steps you used to set them up already done for you.

Use the following commands to setup and load the example:

* `code .`

Open the file `package.json`.

Open the command line and execute the following code:

```
    npm install typescript --save-dev
```

Examine `package.json` to see how it has changed.

Add the following code to line 7 of `package.json`:

```
    "build": "tsc"
```

Open the file named `tsconfig.json` and make the following changes:

```
    "module": "es2015",                   /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "declaration": true,                  /* Generates corresponding '.d.ts' file. */
    "outDir": "./dist",                   /* Redirect output structure to the directory. */
    "rootDir": "./src",                   /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
```

