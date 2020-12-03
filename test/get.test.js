import get from "../codes/get.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test get function", function() {

    const object = { 'a': [{ 'b': { 'c': 3 } }] };

    it("should return object by path", function() {
        expect(get(object, 'a[0].b.c')).to.eql(3);
        expect(get(object, ['a', '0', 'b', 'c'])).to.eql(3);
    })

    it("should return default value", function() {
        expect(get(object, 'a.b.c', 'default')).to.eql('default');
    })

    //tähän varmaan joku virheelliset parametrit juttu
})