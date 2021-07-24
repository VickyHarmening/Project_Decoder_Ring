// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar", () => {
    it ("Should return the encoded message.", () => {
        const expected = ("wklqnixo");
        const actual = caesar("thinkful", 3);
        expect(actual).to.eql(expected);
    });

    it ("Should return the decoded message.", () => {
        const expected = ("thinkful");
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.eql(expected);
    });

    it ("Should return false if the shift is less than -25.", () => {
        const actual = caesar("thinkful", 99);
        expect(actual).to.be.false;
    });

    it ("Should return false if the shift is more than 25.", () => {
        const actual = caesar("thinkful", 99);
        expect(actual).to.be.false;
    });

    it ("Should return false if the shift is 0.", () => {
        const actual = caesar("thinkful", 0);
        expect(actual).to.not.equal(0);
    });

    it ("Should return false if there is no shift sent to the function.", () => {
        const actual = caesar("thinkful");
        expect(actual).to.be.false;
    });
});