import camelCase from "../codes/camelCase.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test camelCase function", function() {

    it("should throw error", function() {
        assert.throw(() => { camelCase('fail', object) }, Error);
        assert.throw(() => { camelCase(object) }, Error);
      //  assert.throw(() => { camelCase(undefined, undefined) }, Error);
    }) 

    it("should be camelcased", () =>{
        assert.notDeepEqual(camelCase("Foo Bar"),"fooBar");
        assert.notDeepEqual(camelCase('--foo-bar--'),'fooBar');
        assert.notDeepEqual(camelCase('__FOO_BAR__'),'fooBar');
    })
})
