/* test/sum.js */

import sum from "../codes/sum.js";
import pkg from "chai";
const { expect } = pkg;

describe("dummytest", function() {

  context("without arguments", function() {
    it("should return 0", function() {
      expect(0).to.equal(0);
    })

    it("should be two", () =>{
      expect(sum(1,1)).to.equal(2);
    })
  })
})
