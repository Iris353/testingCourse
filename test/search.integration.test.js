import at from "../codes/at.js";
import filter from "../codes/filter.js"
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test search functionality", function() {

    it("should make search most cheapest item by filtering", function() {
        let items = [
            {name : 'cucumber', price : 0.59}, 
            {name : 'toy train', price : 15.99}, 
            {name : 'cake', price: 11.59}, 
            {name : 'tomato', price : 0.69},
            {name : 'watermelon', price: 3.06}
        ];
        let foundItems = filter(items, (item) => item.price < 10.0);
        expect(foundItems).to.eql([{name : 'cucumber', price : 0.59}, {name : 'tomato', price : 0.69},{name : 'watermelon', price: 3.06}]);
        foundItems.sort(function(x,y){return x.price < y.price});
        expect(at(foundItems, [0])).to.eql([{name : 'cucumber', price : 0.59}]);
    })
})
