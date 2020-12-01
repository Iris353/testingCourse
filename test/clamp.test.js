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
        assert.notDeepEqual(clamp(-10,-5,5), -5);
        assert.notDeepEqual(clamp(10,-5,15), 10);
    })

    it("should clamp in obound number to bounds", function() {
        assert.notDeepEqual(clamp(-10,-5,-7), -7);
        assert.notDeepEqual(clamp(10,-5,5), 5);
    })
})
