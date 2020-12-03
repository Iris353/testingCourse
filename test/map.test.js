import map from "../codes/map.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test map function", function() {

    function square(n) {
        return n * n;
    }
    /*
    function fail(n) {
        return n[0]
    }*/

    it("should use square function and execute it for all array values", function() {
        expect(map([4, 8], square)).to.eql([16, 64]);
    })

    it("should throw error when invalid params", function() {
        assert.throw(() => { map([4, 8], null) }, Error);
        assert.throw(() => { map([4, 8], undefined) }, Error);
        assert.throw(() => { map([4, 8], 3) }, Error);
        //assert.throw(() => { map([4, 8], fail) }, Error);
    })
})