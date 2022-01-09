"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const classmap_util_1 = require("../classmap-util");
(0, mocha_1.describe)('Running classMap tests', () => {
    (0, mocha_1.it)('should be able to work with simple arrays', () => {
        const classList = (0, classmap_util_1.classMap)(['a', 'b', 'c']);
        (0, chai_1.expect)(classList).to.equal('a b c');
    });
    (0, mocha_1.it)('should be able to work with functions in array', () => {
        const classList = (0, classmap_util_1.classMap)(['a', () => 'b', () => 'c', () => false, () => null, 'd']);
        (0, chai_1.expect)(classList).to.equal('a b c d');
    });
    (0, mocha_1.it)('should be able to work with classMap objects', () => {
        const classList = (0, classmap_util_1.classMap)({
            a: true,
            d: false,
            b: 1,
            c: 'true',
            e: 0,
            f: () => true,
            g: () => false,
            k: () => 'just string'
        });
        (0, chai_1.expect)(classList).to.equal('a b c f k');
    });
});
