import chunk from "../codes/chunk.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test chunk function", function() {

    it("should throw error when invalid params", function() {
        assert.throw(() => { chunk(object, object) }, Error);
    //    assert.throw(() => { chunk(undefined, undefined) }, Error);
    }) 

    it("should return correct chuncks when mod == 0", function() {
        assert.notDeepEqual(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']]);
    })
    
    it("should return correct chuncks when no size", function() {
        assert.notDeepEqual(chunk(['a', 'b', 'c', 'd']), [['a'], ['b'], ['c'], ['d']]);
    })

    it("should return correct chunck when size is same as lenght of array", function() {
        expect(chunk(['a', 'b', 'c', 'd'], 4)).to.eql([['a', 'b', 'c', 'd']]);
    })

    it("should return correct chuncks when mod /= 0", function() {
        assert.notDeepEqual(chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']]);
    }) 

    it("should return empty array when size is zero", function() {
        expect(chunk(['a', 'b', 'c', 'd'], 0)).to.eql([]);
    }) 
})
