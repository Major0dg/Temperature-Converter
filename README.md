This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information about the project
You can find the most recent version of this guide [here](https://github.com/Major0dg/Temperature-Converter.git).

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  -
- [Supported Browsers](#supported-browsers)
- [Supported Language Features](#supported-language-features)
- [Syntax Highlighting in the Editor](#syntax-highlighting-in-the-editor)
- [Displaying Lint Output in the Editor](#displaying-lint-output-in-the-editor)
- [Debugging in the Editor](#debugging-in-the-editor)
- [Formatting Code Automatically](#formatting-code-automatically)
- [Changing the Page `<title>`](#changing-the-page-title)
- [Installing a Dependency](#installing-a-dependency)
- [Importing a Component](#importing-a-component)
- [Code Splitting](#code-splitting)
- [Adding a Stylesheet](#adding-a-stylesheet)
- [Adding a CSS Modules Stylesheet](#adding-a-css-modules-stylesheet)

## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

```sh
npm install --save react-router-dom
```

Alternatively you may use `yarn`:

```sh
yarn add react-router-dom
```

This works for any library, not just `react-router-dom`.

## Importing a Component

This project setup supports ES6 modules thanks to Webpack.<br>
While you can still use `require()` and `module.exports`, we encourage you to use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html) instead.

For example:

### `GradConverter.js`

````js
import React, { Component } from 'react';

## Code Splitting

Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand.

This project setup supports code splitting via [dynamic `import()`](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand). Its [proposal](https://github.com/tc39/proposal-dynamic-import) is in stage 3. The `import()` function-like form takes the module name as an argument and returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which always resolves to the namespace object of the module.

Here is an example:

### `moduleA.js`

```js
const moduleA = 'Hello';

export { moduleA };
````

### `App.js`

```js
import React, { Component } from 'react';

export default function GradConverter(){
    const [temp, updateTemp] = React.useState({ f: 0, c: 0 })

    const updateC = ev => updateTemp({
      c: ev.target.value,
      f: (+ev.target.value * 9 / 5 + 32).toFixed(2)
    })

    const updateF = ev => updateTemp({
      c: ((+ev.target.value - 32) * 5 / 9).toFixed(2),
      f: ev.target.value
    })

    return(
      <div id="container">
        <div id="box1">
          <h1>Celsius</h1>
          <input
              type = "number"
              value = {temp.c}
              onChange = {updateC} >
            </input>
        </div>
        <div id="box2">
            <h1>Fahrenheit</h1>
            <input
              type = "number"
              value = {temp.f}
              onChange = {updateF}>
            </input>
            </div>
      </div>
    )
  }
  export default GradConverter;


```

This will make `moduleA.js` and all its unique dependencies as a separate chunk that only loads after the user clicks the 'Load' button.

You can also use it with `async` / `await` syntax if you prefer it.

## Adding a Stylesheet

This project setup uses [Webpack](https://webpack.js.org/) for handling all assets. Webpack offers a custom way of “extending” the concept of `import` beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to **import the CSS from the JavaScript file**:

### `App.css`

```css
.App-logo {
  height: 100px;
  pointer-events: none;
  margin-top: -1500%;
  padding: 33px;
}
```
