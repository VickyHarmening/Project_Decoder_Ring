// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
    it ("Should return the encoded message.", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected);
    });

    it ("Should return the decoded message.", () => {
        const expected = "thinkful";
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.eql(expected);
    });

    it ("Should return false if alphabet is not exactly 26 characters.", () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    });

    it ("Should return false if all the characters in alphabet are not unique.", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    });
});