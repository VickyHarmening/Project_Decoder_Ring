// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius", () => {

    it ("Should return the encoded message.", () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.eql(expected);
    });

    it ("Should return the decoded message.", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.eql(expected);
    });
    
    it ("Should return false if the the number of characters is not even.", () => {
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    }); 

    it ("Should return i/j if 42 is decoded.", () => {
        const actual = polybius("4432423352125413", false);
        expect(actual).to.include("i/j");
    }); 
});