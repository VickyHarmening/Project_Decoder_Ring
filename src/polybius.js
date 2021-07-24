// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function makeDecodedArray(input) {
    const decodeTable = {
      11:"a", 21:"b", 31:"c", 41:"d", 51:"e",
      12:"f", 22:"g", 32:"h", 42:"(i/j)", 52:"k",
      13:"l", 23:"m", 33:"n", 43:"o", 53:"p",
      14:"q", 24:"r", 34:"s", 44:"t", 54:"u",
      15:"v", 25:"w", 35:"x", 45:"y", 55:"z"
    };
    
    let tempLength = 0;
    let tempArray = [];

    for (i = 0; i < input.length; i++) {
      if (input[i] !== " ") {
        tempLength += 1;
      };
    };
    if (tempLength % 2 == 1) return false;
    for (let j = 0; j < input.length; j+=2) {
      if (input[j] === " ") {
        tempArray.push(" ");
        j -= 1;
      } else {
        tempArray.push(input.substr(j,2));
      };
    };
    let returnArray = [];
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i] === " ") {
        returnArray.push(" ");
      } else {
        returnArray.push(decodeTable[tempArray[i]]);
      };
    };
    returnArray = returnArray.join("");
    return(returnArray);  
  };
  
  function makeEncodedArray(input) {
     const encodeTable = {
      "a":11, "b":21, "c":31, "d":41, "e":51,
      "f":12, "g":22, "h":32, "i":42, "j":42, "k":52,
      "l":13, "m":23, "n":33, "o":43, "p":53,
      "q":14, "r":24, "s":34, "t":44, "u":54,
      "v":15, "w":25, "x":35, "y":45, "z":55
    };
     
    returnArray = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        returnArray.push(" ");
      } else { 
        returnArray.push(encodeTable[input[i]]);
      };
    };
    return(returnArray.join(""));  
  };
  
  
  
  function polybius(input, encode = true) {
    // your solution code here
    
    let encodedArray = [];
    input = input.toLowerCase();
    if (encode === true) {
      encodedArray = makeEncodedArray(input);
    } else {
      encodedArray = makeDecodedArray(input);
    };
    return(encodedArray);
  };
  
  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };