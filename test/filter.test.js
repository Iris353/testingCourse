import filter from "../codes/filter.js";
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test filter function", function() {

    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
    ];

    it("should return active users", function() {
        expect(filter(users, ({ active }) => active)).to.be.an('array').that.includes({'user': 'barney', 'active': true});
    })

    it("should return active users2", function() {
        expect(filter(users, ({ active }) => active)).to.eql([{'user': 'barney', 'active': true}]);
    })
})