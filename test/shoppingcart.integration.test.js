import at from "../codes/at.js";
import add from "../codes/add.js";
import castArray from "../codes/castArray.js"
import slice from "../codes/slice.js"
import isEmpty from "../codes/isEmpty.js"
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test shopping cart functionality", function() {

    it("should count total sum of items in cart", function() {
        let shoppingCart = [{name : 'cucumber', price : 0.50}, {name : 'tomato', price : 0.60}];
        let prices = at(shoppingCart, ['[0].price', '[1].price']);
        expect(add(prices[0], prices[1])).to.eql(1.1);
    })

    it("should create shopping cart when first item added", function(){
        let item = {name : 'cucumber', price : 0.50};
        expect(castArray(item)).to.eql([{name : 'cucumber', price : 0.50}]);
    })

    it("should remove item form cart and check if empty", function(){
        let shoppingCart = [{name : 'cucumber', price : 0.50}, {name : 'tomato', price : 0.60}];
        expect(isEmpty(slice(shoppingCart, 0))).to.eql(false);
        expect(isEmpty(slice(shoppingCart,2))).to.eql(true)
    })
})
