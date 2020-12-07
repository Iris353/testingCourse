import drop from "../codes/drop.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test drop function", function() {

    it("should return empty array when invalid params", function() {
        expect(drop(undefined)).to.eql([]);
        expect(drop(5)).to.eql([]);
        expect(drop(1, 5)).to.eql([]);
        expect(drop(null)).to.eql([]);
        expect(drop(null, null)).to.eql([]);
        expect(drop('t')).to.eql([]);

    })
    
    it("should handle negative", function() {
        expect(drop([1,2,3], -1)).to.eql([1,2,3])
    })

    it("should handle when remove more than array length", function() {
        expect(drop([2, 1, 1], 5)).to.eql([]);
    })

    it("should drop first", function() {          
        expect(drop([2, 1, 1])).to.eql([1, 1]);
        expect(drop([2, 1, -3, 4, 10])).to.eql([1, -3, 4, 10]);
    })
    
    it("should return empty", function() {
        expect(drop([2])).to.eql([]);
        expect(drop([2,2], 2)).to.eql([]);
    })

    it("should return empty when empty array given", function() {
        expect(drop([])).to.eql([]);
    })

    it("should drop several from begining", function() {
        expect(drop([2, 1,2,2], 2)).to.eql([2,2]);
        expect(drop([2, 1, 3, 4, 10], 4)).to.eql([10]);
    })

    it("should drop nothing", function() {
        expect(drop([2, 1,2,2], 0)).to.eql([2,1,2,2]);
    })
})
