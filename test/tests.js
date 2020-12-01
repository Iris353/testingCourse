import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import camelCase from "../codes/camelCase.js";

var mocha = require("mocha");
var assert = require('assert');

describe("dummytest", function() {

  context("without arguments", function() {  
    it("should be camelcased", () =>{
      console.log(camelCase)
      let x = camelCase('Foo Bar');
      assert.equal(x, " fooBar");
    })
  })
})
