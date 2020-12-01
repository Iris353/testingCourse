import clamp from "../codes/clamp.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test clamp function", function() {

    it("should throw error when invalid params", function() {
        assert.throw(() => { clamp(object, object, object) }, Error);
        assert.throw(() => { clamp("1", "2","3") }, Error);
        assert.throw(() => { clamp(null, null,null) }, Error);
    }) 

    it("should clamp outbound number to bounds", function() {
        expect(clamp(-10,-5,5)).to.eql(-5);
        expect(clamp(10,-5,15).to.eql(10);
    })

    it("should clamp in obound number to bounds", function() {
        expect(clamp(-10,-5,-7)).to.eql(-7);
        expect(clamp(10,-5,5)).to.eql(5);
    })
})
