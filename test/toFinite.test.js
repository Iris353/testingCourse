import toFinite from "../codes/toFinite.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test toFinite function", function() {

    it("should return finite number", function() {
        expect(toFinite(12.7)).to.eql(12.7);
        expect(toFinite('12.7')).to.eql(12.7);
        expect(toFinite(Number.MIN_VALUE)).to.eql(5e-324);
        expect(toFinite(Infinity)).to.eql(1.7976931348623157e+308);
    })

    it("should return zero", function() {
        expect(toFinite(null)).to.eql(0);
        expect(toFinite(0)).to.eql(0);
        expect(toFinite(undefined)).to.eql(0);
        expect(toFinite(NaN)).to.eql(0);
    })
})