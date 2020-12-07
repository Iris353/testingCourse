import at from "../codes/at.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test at function", function() {

    it("should return array of two finds", function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([3, 4]);
    }) 

    it("should return array of one find", function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        expect(at(object, 'a[0].b.c')).to.eql([3]);
    }) 

    it("should throw error", function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        assert.throw(() => { at('fail', object) }, Error);

    }) 

  /*  it("should return empty array", function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        expect(at(object, ['a[0].a.c', 'a[2]'])).to.eql([]);
    }) 

    it("should return array of one find", function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        expect(at(object, ['a[0].a.c', 'a[1]'])).to.eql([4]);
    }) */
})
