'use strict';
const Code = require('code');
const BaseJoi = require('joi');
const Lab = require('lab');

const Extend = require('../');
const Joi = BaseJoi.extend(Extend);

// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;


describe('strings', () => {

    it('should convert to camelCase', (done) => {

        const res = Joi.attempt('hello world', Joi.string().camelCase());
        expect(res).to.equal('helloWorld');
        done();
    });

    it('should convert caps to camelCase', (done) => {

        const res = Joi.attempt('HELLO WORLD', Joi.string().camelCase());
        expect(res).to.equal('helloWorld');
        done();
    });

    it('should convert to CamelCase', (done) => {

        const res = Joi.attempt('hello world', Joi.string().CamelCase());
        expect(res).to.equal('HelloWorld');
        done();
    });

    it('should convert to CamelCase', (done) => {

        const res = Joi.attempt('HELLO WORLD', Joi.string().CamelCase());
        expect(res).to.equal('HelloWorld');
        done();
    });

    it('should do nothing', (done) => {

        const res = Joi.attempt('hello world', Joi.string());
        expect(res).to.equal('hello world');
        done();
    });
});
