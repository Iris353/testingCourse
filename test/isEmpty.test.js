import isEmpty from "../codes/isEmpty.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test isEmpty function", function() {

    it("should return empty", function() {
        expect(isEmpty(null)).to.eql(true);
        expect(isEmpty(undefined)).to.eql(true);
        expect(isEmpty(true)).to.eql(true);
        expect(isEmpty(false)).to.eql(true);
        expect(isEmpty(1)).to.eql(true);
        expect(isEmpty([])).to.eql(true);
        expect(isEmpty({})).to.eql(true);
        expect(isEmpty('')).to.eql(true);
    })

    it("should return not empty", function() {
        expect(isEmpty([1, 2, 3])).to.eql(false);
        expect(isEmpty({'a': 1, 'b': 2})).to.eql(false);
        expect(isEmpty('123')).to.eql(false);
        expect(isEmpty('1')).to.eql(false);
    })
})