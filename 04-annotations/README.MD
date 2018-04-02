# Example 4 - Annotations

The previous example was simple, in order to demonstrate the basics of setting up an NPM package. In a real-world app, however, you will want to have a more complex build system setup that interacts well with source control. This sample shows you the recommended setup for a basic TypeScript app that will grow beyond a single file.

This example and all that follow it will build upon the concepts learned in previous examples, and so will have many of the previous steps you used to set them up already done for you.

Use the following commands to setup and load the example:

* `code .`

Open the file `package.json`.

Open the command line and execute the following code:

```
    npm install typescript webpack webpack-cli ts-loader --save-dev
```

Examine `package.json` to see how it has changed.

Add the following code at line 7 of `package.json`:

```
    "build": "webpack",
    "start": "node ./dist/bundle.js"
```

Examine the file `webpack.config.js` to see how Webpack is set up.

Execute the following code to compile and run your program: 

```
    npm run build
    npm start
```

Examine the `bundle.js` file in the `/dist` directory.