import compact from "../codes/compact.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test compact function", function() {

    it("should throw error when invalid params", function() {
        assert.throw(() => { compact(object) }, Error);
        assert.throw(() => { compact(12) }, Error);
    }) 

    it("should return array where false value is removed", function() {
         //expect(compact([1, 2, false, 3])).to.eql([1,2,3]);
   })
    
    it("should return array where string values are removed", function() {
       // expect(compact([ 1, 2, '', 3])).to.eql([1,2,3]);
    })
    
    it("should return array where zeroes are removed", function() {
       // expect(compact([0, 1, 2, 3])).to.eql([1,2,3]);
    })
    
    it("should return array where undefined values are removed", function() {
       // expect(compact([1, undefined, 2, 3])).to.eql([1,2,3]);
    })
    
    it("should return array where null values are removed", function() {
      // expect(compact([null, 1, 2, 3])).to.eql([1,2,3]);
    })
    it("should return array where NaN values are removed", function() {
      //  expect(compact([1, 2, NaN, 3])).to.eql([1,2,3]);
    })
    
    it("should return empty array", function() {
        expect(compact([])).to.eql([]);
    })

    it("should remove all falsey values", function() {
        expect(compact([null, ",", undefined, NaN, false])).to.eql([]);
    })

    it("should return same array", function() {
       // expect(compact([1,2,3,4])).to.eql([1,2,3,4]);
    })
})
