import at from "../codes/at.js";
import add from "../codes/add.js";
import castArray from "../codes/castArray.js"
import slice from "../codes/slice.js"
import isEmpty from "../codes/isEmpty.js"
import ceil from "../codes/ceil.js"
import pkg from "chai";
const { expect, assert } = pkg;

describe("Test shopping cart functionality", function() {

    it("should count total sum of items in cart", function() {
        let shoppingCart = [{name : 'cucumber', price : 0.59}, {name : 'tomato', price : 0.69}];
        let prices = at(shoppingCart, ['[0].price', '[1].price']);
        expect(ceil(add(prices[0], prices[1]),2)).to.eql(1.28);
    })

    it("should remove item form cart and check if empty", function(){
        let item = {name : 'cucumber', price : 0.50};
        let shoppingCart = castArray(item);
        expect(shoppingCart).to.eql([{name : 'cucumber', price : 0.50}]);
        shoppingCart.push({name : 'tomato', price : 0.60});
        expect(isEmpty(slice(shoppingCart, 0))).to.eql(false);
        expect(isEmpty(slice(shoppingCart,2))).to.eql(true)
    })
})
