import ceil from "../codes/ceil.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test ceil function", function() {

    it("should round numbers", function() {
        expect(ceil(1.0001)).to.eql(1);
        expect(ceil(1.5001)).to.eql(2);
        expect(ceil(1.1)).to.eql(1);
        expect(ceil(1.931)).to.eql(2);
    }) 

    it("should round numbers to decimal", function() {
        expect(ceil(1.0001, 2)).to.eql(1.00);
        expect(ceil(1.0009, 3)).to.eql(1.001);
        expect(ceil(1.5671, 1)).to.eql(1.6);
        expect(ceil(1.5671, 2)).to.eql(1.57);
        expect(ceil(1.5671, 3)).to.eql(1.567);
    }) 

    it("should throw error", function() {
        assert.throw(() => { ceil('1.44dfcv','2') }, Error);
        assert.throw(() => { ceil('1.e234') }, Error);
        assert.throw(() => { ceil(null,null) }, Error);
        assert.throw(() => { ceil(null) }, Error);
    })
})
