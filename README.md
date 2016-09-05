# SVG Placeholder [![npm version](https://badge.fury.io/js/svg-placeholder.svg)](http://badge.fury.io/js/svg-placeholder) [![Dependency Status](https://david-dm.org/jantimon/svg-placeholder.svg)](https://david-dm.org/jantimon/svg-placeholder)  [![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard) [![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)]() [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

The SVG placeholder is a mock server to generate images for frontend mocks similar to [https://placehold.it/](https://placehold.it/).  
It supports the same arguments to configure the image:

  * http://localhost:3000/200x300/  
Image with 200px width, 300px height
  * http://localhost:3000/200x300/fff  
Image with 200px width, 300px height and a white background
  * http://localhost:3000/200x300/fff/000  
Image with 200px width, 300px height, a white background and a black font

## Stand alone

### Installation

```bash
npm i -g svg-placeholder
```

### Usage

```bash
svg-placeholder
```

## Middleware

### Installation

```bash
npm i svg-placeholder --save-dev
```

### Usage

```js
var express = require('express');
var app = express();
var svgPlaceholderMiddleware = require('svg-placeholder');

app.use('/', svgPlaceholderMiddleware());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```


# Changelog

Take a look at the  [CHANGELOG.md](https://github.com/jantimon/svg-placeholder/tree/master/CHANGELOG.md).


# Contribution

You're free to contribute to this project by submitting [issues](https://github.com/jantimon/svg-placeholder/issues) and/or [pull requests](https://github.com/jantimon/svg-placeholder/pulls). This project is test-driven, so keep in mind that every change and new feature should be covered by tests.
This project uses the [semistandard code style](https://github.com/Flet/semistandard).

# License

This project is licensed under [MIT](https://github.com/jantimon/svg-placeholder/blob/master/LICENSE).
