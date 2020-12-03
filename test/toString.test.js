import toString from "../codes/toString.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test toString function", function() {

    it("should return empty string", function() {
        expect(toString(null)).to.eql('');
        expect(toString(undefined)).to.eql('');
    })

    it("should return sign of -0", function() {
        expect(toString(-0)).to.eql('-0');
    })

    it("should return string", function() {
        expect(toString(12)).to.eql('12');
        expect(toString([1, 2, 3])).to.eql('1,2,3');
        expect(toString(['moi', 'mita', 'kuuluu'])).to.eql('moi,mita,kuuluu');
    })
})