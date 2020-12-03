import slice from "../codes/slice.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test slice function", function() {

    it("should return sliced array", function() {
        var array = [1, 2, 3, 4, 5];
        expect(slice(array, 2)).to.eql([3, 4, 5]);
        expect(slice(array, 1, 3)).to.eql([2, 3]);
        expect(slice(array, 0)).to.eql(array);
    })

    it("should return empty array", function() {
        var array = [1, 2, 3, 4, 5];
        expect(slice(array, 2, 2)).to.eql([]);
        expect(slice(array, 20)).to.eql([]);
    })

    it("should work with negative index", function() {
        var array = [1, 2, 3, 4, 5];
        expect(slice(array, -1)).to.eql([5]);
        expect(slice(array, -3)).to.eql([3, 4, 5]);
    })
})