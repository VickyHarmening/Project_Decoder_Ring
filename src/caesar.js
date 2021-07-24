// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function encodeArray(input, shift) {
    const normal = [
      "a", "b", "c", "d", "e", 
      "f", "g", "h", "i", "j", 
      "k", "l", "m", "n", "o", 
      "p", "q", "r", "s", "t", 
      "u", "v", "w", "x", "y", "z"
    ];
    let encodedTable = [];
    let encodedArray = normal.slice(shift).concat(normal.slice(0,shift));
    for (let i = 0; i < 26; i++) {
      encodedTable[normal[i]] = encodedArray[i];
    };
    let tempArray = [];
    for (let i = 0; i < input.length; i++) {
      if ((/[a-z]/).test(input[i])) {
        tempArray.push(encodedTable[input[i]]);
      } else {
        tempArray.push(input[i]);
      };
    };
    tempArray.join("");
    return(tempArray);
  };
  
  function decodeArray(input, shift) {
    const normal = [
      "a", "b", "c", "d", "e", 
      "f", "g", "h", "i", "j", 
      "k", "l", "m", "n", "o", 
      "p", "q", "r", "s", "t", 
      "u", "v", "w", "x", "y", "z"
    ];
    let decodedTable = [];
    let decodedArray = normal.slice(shift).concat(normal.slice(0,shift));
    for (let i = 0; i < 26; i++) {
      decodedTable[decodedArray[i]] = normal[i];
    };
    let tempArray = [];
    
    for (let i = 0; i < input.length; i++) {
      if ((/[a-z]/).test(input[i])) {
        tempArray.push(decodedTable[input[i]]);
      } else {
        tempArray.push(input[i]);
      };
    };
    tempArray.join("");
    return(tempArray);
  };
  
  function caesar(input, shift, encode = true) {
    // your solution code here

    let tempArray = [];
    if ((shift == 0) || (shift > 25) || (shift < -25) || (shift == undefined)) return false;
    input = input.toLowerCase();
    if (encode === true) {
      tempArray = encodeArray(input, shift);
    } else {
      tempArray = decodeArray(input, shift);
    };
    tempArray = tempArray.join("");
    return tempArray;
  };

  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
