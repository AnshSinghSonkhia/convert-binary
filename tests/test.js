const convert = require("../index");

console.log(convert.toBinaryFromNumber(10)); // "1010"
console.log(convert.toBinaryFromString("A")); // "01000001"
console.log(convert.toBinaryFromHex("A")); // "1010"
console.log(convert.toBinaryFromOctal("12")); // "1010"
console.log(convert.toBinaryFromBoolean(true)); // "1"
console.log(convert.toBinaryFromFloat(5.75)); // "01000000101110000000000000000000"

console.log(convert.binaryToNumber("1010")); // 10
console.log(convert.binaryToString("01000001")); // "A"
console.log(convert.binaryToHex("1010")); // "A"
console.log(convert.binaryToOctal("1010")); // "12"
console.log(convert.binaryToBoolean("1")); // true
console.log(convert.binaryToFloat("01000000101110000000000000000000")); // 5.75

console.log(convert.padBinary("101", 8)); // "00000101"
console.log(convert.chunkBinary("11001100", 4)); // ["1100", "1100"]
console.log(convert.invertBinary("1010")); // "0101"
console.log(convert.xorBinary("1100", "1010")); // "0110"
console.log(convert.andBinary("1100", "1010")); // "1000"
console.log(convert.orBinary("1100", "1010")); // "1110"
console.log(convert.shiftBinaryLeft("1010", 2)); // "101000"
console.log(convert.shiftBinaryRight("1010", 2)); // "10"
