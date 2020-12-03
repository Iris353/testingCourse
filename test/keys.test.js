import keys from "../codes/keys.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test keys function", function() {

    class TestObject {
        constructor() {
            this.a = 1;
            this.b = 2;
        }
    }

    it("should return key names", function() {
        expect(keys(new TestObject)).to.eql(['a', 'b']);
        expect(keys('moro')).to.eql(['0', '1', '2', '3']);
    })
    /*
    it("should throw error when invalid params", function() {
        assert.throw(() => { keys(undefined) }, Error);
    }) */
})