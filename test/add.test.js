import add from "../codes/add.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test at function", function() {

    it("should add positive numbers", function() {
        expect(add(1, 1)).to.eql(2);
    }) 

    it("should add negative numbers", function() {
        expect(add(-1, -1)).to.eql(-2);
    })

    it("should add positive and negative numbers", function() {
        expect(add(2, -1)).to.eql(1);
        expect(add(-2, 4)).to.eql(2);
        expect(add(1, -10)).to.eql(-9);
    })

    it("should add nothing", function() {
        expect(add(0, 1)).to.eql(1);
        expect(add(1, 0)).to.eql(1);
    })

    it("should throw error", function() {
        assert.throw(() => { add('1','2') }, Error);
        assert.throw(() => { add(null,null) }, Error);
    })
})
