import upperFirst from "../codes/upperFirst.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test upperFirst function", function() {

    it("should return string with first letter capitalized", function() {
        expect(upperFirst('ostoslista')).to.eql('Ostoslista');
        expect(upperFirst('OSTOSLISTA')).to.eql('OSTOSLISTA');
        expect(upperFirst('Ostoslista')).to.eql('Ostoslista');
    })
})