import difference from "../codes/difference.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test difference function", function() {

    it("should  return empty when inthrowvalid params", function() {
        expect(difference(undefined, undefined)).to.eql([]);
        expect(difference(12,12)).to.eql([]);
        expect(difference(null,null)).to.eql([]);
    }) 

    it("should return array of different values", function() {          
        expect(difference([2, 1], [2, 3])).to.eql([1]);
        expect(difference([2, 1, 3, 4, 10], [2, 3, 5])).to.eql([1,4, 10]);
    })
    
    it("should return empty", function() {
        expect(difference([2, 3], [2, 3,])).to.eql([]);
    })
})
