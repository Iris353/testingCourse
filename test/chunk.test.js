import chunck from "../codes/chunk.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test camelCase function", function() {

    it("should throw error when invalid params", function() {
        assert.throw(() => { chunk(object, object) }, Error);
        assert.throw(() => { chunk(undefined, undefined) }, Error);
    }) 

    it("should return correct chuncks when mod == 0", function() {
        assert.equals(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']]);
    })
    
    it("should return correct chuncks when no size", function() {
        assert.equals(chunk(['a', 'b', 'c', 'd']), [['a'], ['b'], ['c'], ['d']]);
    })

    it("should return correct chunck when size is same as lenght of array", function() {
        assert.equals(chunk(['a', 'b', 'c', 'd'], 4), [['a', 'b', 'c', 'd']]);
    })

    it("should return correct chuncks when mod /= 0", function() {
        assert.equals(chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']]);
    }) 

    it("should return empty array when size is zero", function() {
        assert.equals(chunk(['a', 'b', 'c', 'd'], 0), []);
    }) 
})
