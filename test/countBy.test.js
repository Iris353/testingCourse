import countBy from "../codes/countBy.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test countBy function", function() {

    it("should throw error when invalid params", function() {
      //  assert.throw(() => { countBy(undefined, undefined) }, Error);
        assert.throw(() => { compact(12, 12) }, Error);
        assert.throw(() => { compact([], null) }, Error);
    }) 

    it("should return correctly counted values", function() {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ]
            
        expect(countBy(users, value => value.active)).to.eql({ 'true': 2, 'false': 1 });
        expect(countBy(users, value => value.user)).to.eql({ 'barney': 1, 'betty': 1, 'fred' : 1});
    })
    
    it("should return empty", function() {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ]

        expect(countBy(users, value => value.deactive)).to.eql({});
    })
})
