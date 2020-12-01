import camelCase from "../codes/camelCase.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test camelCase function", function() {

    it("should throw error", function() {
        assert.throw(() => { camelCase('fail', object) }, Error);
        assert.throw(() => { camelCase(object) }, Error);
        assert.throw(() => { camelCase() }, Error);
    }) 

    it("should be camelcased", () =>{
        expect(camelCase("Foo Bar")).to.eql("fooBar");
        expect(camelCase('--foo-bar--')).to.eql('fooBar');
        expect(camelCase('__FOO_BAR__')).to.eql('fooBar');
    })
})
