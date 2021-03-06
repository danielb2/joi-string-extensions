'use strict';

const Joi = require('joi');
const Lingo = require('lingo');

module.exports = {
    base: Joi.string(),
    name: 'string',
    pre(value, state, options) {

        if (this._flags.camelCase) {
            return Lingo.camelcase(value.toLowerCase());
        }

        if (this._flags.CamelCase) {
            return Lingo.camelcase(value.toLowerCase(), true);
        }

        return value;
    },
    rules: [
        {
            name: 'camelCase',
            setup(params) {

                this._flags.camelCase = true;
            }
        },
        {
            name: 'CamelCase',
            setup(params) {

                this._flags.CamelCase = true;
            }
        }
    ]
};
