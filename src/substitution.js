// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function makingEncodedTable(alphabet) {
    let table = [];
    const normal = [
      "a", "b", "c", "d", "e", 
      "f", "g", "h", "i", "j", 
      "k", "l", "m", "n", "o", 
      "p", "q", "r", "s", "t", 
      "u", "v", "w", "x", "y", "z"
    ];
    for (let i = 0; i < 26; i++) {
      table[normal[i]] = alphabet[i];
    };
    return(table);
  };

  function makingDecodedTable(alphabet) {
    let table = [];
    const normal = [
      "a", "b", "c", "d", "e", 
      "f", "g", "h", "i", "j", 
      "k", "l", "m", "n", "o", 
      "p", "q", "r", "s", "t", 
      "u", "v", "w", "x", "y", "z"
    ];
    for (let i = 0; i < 26; i++) {
      table[alphabet[i]] = normal[i];
    };
    return(table);
  };
  
  function encodedString(input, alphabet, encode) {
    const tempInputLength = input.length;
    let codedTable = [];
   
    input = input.toLowerCase();
    if (encode === true) {
      codedTable = makingEncodedTable(alphabet);
    } else { 
      codedTable = makingDecodedTable(alphabet);
    };
    let codedString = [];
    for (i = 0; i < tempInputLength; i++) {
      if (input[i] === " ") {
        codedString[i] = input[i];
      } else { 
        codedString[i] = codedTable[input[i]];
      };
    };
    return(codedString);
  };
  
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    alphabet = alphabet.toLowerCase();
    alphabet = alphabet.split("");
    for (let i = 0; i < 26; i++) {
      for (let j = (i + 1); j < 27; j++) {
        if (alphabet[i] === alphabet[j]) return false;
      };
    };
    let tempString = (encodedString(input, alphabet, encode));
    tempString = tempString.join("");
    return (tempString);
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
