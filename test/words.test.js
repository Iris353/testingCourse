import words from "../codes/words.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test words function", function() {

    it("should split string into an array of words", function() {
        expect(words('ohjelmistojen testaus - kurssi')).to.eql(['ohjelmistojen', 'testaus', 'kurssi']);
    })

    it("should split string into an array of words by regex", function() {
        expect(words('ohjelmistojen, testaus - kurssi', /[^, ]+/g)).to.eql(['ohjelmistojen', 'testaus', '-', 'kurssi']);
    })

    it("should throw error when invalid params", function() {
        assert.throw(() => { words(1) }, Error);
        assert.throw(() => { words(null) }, Error);
        assert.throw(() => { words(null, 1) }, Error);
    }) 
})