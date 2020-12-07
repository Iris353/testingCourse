import defaultTo from "../codes/defaultTo.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test defaultTo function", function() {

    it("should return nondefault value", function() {
        expect(defaultTo(1, 10)).to.eql(1);
    })

    it("should return default value", function() {
        expect(defaultTo(undefined, 10)).to.eql(10);
        expect(defaultTo(null, 10)).to.eql(10);
        //expect(defaultTo(NaN, 10)).to.eql(10);
    })
})