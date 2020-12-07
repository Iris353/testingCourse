import every from "../codes/every.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test every function", function() {

    it("should return true when invalid params", function() {
        expect(every(null, null)).to.eql(true);
        expect(every(undefined, undefined)).to.eql(true);
        expect(every(12, 7)).to.eql(true);
    })

    it("should return false", function() {
        expect(every([true, 1, null, 'yes'], Boolean)).to.eql(false);
        expect(every([true, 1, null, 'yes'], Number)).to.eql(false);
    })

    it("should return true for boolean", function() {
        expect(every([true, true, true], Boolean)).to.eql(true);
        expect(every([true, false, true], Boolean)).to.eql(false);
    })

    it("should return true for string", function() {
        expect(every(["23","to","string"], String)).to.eql(true);
    })

    it("should return true for number", function() {
        expect(every([1,2,3,4,5], Number)).to.eql(true);
    })

    it("should return true for empty array", function() {
        expect(every([], Number)).to.eql(true);
    })
})
