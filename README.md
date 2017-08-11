# joi-string-extensions
a collection of Joi extensions for strings


# Usage

Usage is a two steps process. First, a schema is constructed using the provided types and constraints:

```js
const BaseJoi = require('joi');
const Extension = require('joi-string-extensions');
const Joi = BaseJoi.extend(Extension);

Joi.attempt('hello world', Joi.string().camelCase()); // > helloWorld
Joi.attempt('hello world', Joi.string().CamelCase()); // > HelloWorld
```
