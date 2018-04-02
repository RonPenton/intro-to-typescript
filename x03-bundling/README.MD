# Example 3 - Bundling

Example 2 works well with applications that have a small number of source files, but once you begin working with larger apps, you will want to use a module system and a bundler. This example shows you how to set up webpack for a barebones bundling system.

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