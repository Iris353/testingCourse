import castArray from "../codes/castArray.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test castArrayfunction", function() {

    it("should return an array", function() {
        expect(castArray(1)).to.eql([1]);
        expect(castArray({ 'a': 1 })).to.eql([{ 'a': 1 }]);
        expect(castArray('abc')).to.eql(['abc']);
    })

    it("should return null/empty/undefined", function() {
        expect(castArray(null)).to.eql([null]);
        expect(castArray(undefined)).to.eql([undefined]);
        //expect(castArray()).to.eql([]);
    })
})