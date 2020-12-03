import difference from "../codes/difference.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test difference function", function() {

    it("should throw error when invalid params", function() {
      //  assert.throw(() => { difference(undefined, undefined) }, Error);
        assert.throw(() => { difference(12, 12) }, Error);
        assert.throw(() => { difference(null, null) }, Error);
    }) 

    it("should return array of different values", function() {          
        expect(difference([2, 1], [2, 3])).to.eql([1]);
        expect(difference([2, 1, 3, 4, 10], [2, 3, 5])).to.eql([1,4, 10]);
    })
    
    it("should return empty", function() {
        expect(difference([2, 3], [2, 3,])).to.eql([]);
    })
})
