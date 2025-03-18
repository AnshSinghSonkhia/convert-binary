# Convert Binary  
An NPM package to convert various data types to and from binary representation. Easily convert numbers, strings, hex, octal, and more to and from binary format.  

<code><img height="30" src="https://img.shields.io/badge/NPM-111111?style=for-the-badge&logo=npm&logoColor=#c63635"></code>  
<code><img height="30" src="https://img.shields.io/badge/JavaScript-111111?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></code>

## **Features**  
✅ Convert numbers, strings, hex, and more to binary  
✅ Convert binary back to readable formats  
✅ Supports floats, booleans, and bitwise operations  
✅ No dependencies – lightweight and fast!  

---

## **Installation**  
Install the package via npm:  
```sh
npm install convert-binary
```

--- 

# Importing

### For CommonJS (Node.js Default)

```js
const convert = require('convert-binary');
```

### For ES Modules (ECMAScript Imports)

```js
import convert from 'convert-binary';
```

---

# Usage
Convert a number to binary

```js
const { toBinaryFromNumber } = require('convert-binary');

console.log(toBinaryFromNumber(10));  
// Output: '1010'
```

Convert a string to binary

```js
const { toBinaryFromString } = require('convert-binary');

console.log(toBinaryFromString("Hello"));  
// Output: '0100100001100101011011000110110001101111'
```

Convert binary to a number

```js
const { binaryToNumber } = require('convert-binary');

console.log(binaryToNumber("1010"));  
// Output: 10
```

Convert binary to a string

```js
const { binaryToString } = require('convert-binary');

console.log(binaryToString("0100100001100101011011000110110001101111"));  
// Output: 'Hello'
```

---

# API Reference

### Conversion Functions

| Function                  | Description                              | Example Input | Example Output                      |
|---------------------------|------------------------------------------|---------------|-------------------------------------|
| toBinaryFromNumber(num)   | Converts a number to binary.             | 10            | "1010"                              |
| toBinaryFromString(str, encoding="utf-8") | Converts a string to binary.             | "A"           | "01000001"                          |
| toBinaryFromHex(hexStr)   | Converts a hex string to binary.         | "A"           | "1010"                              |
| toBinaryFromOctal(octalStr) | Converts an octal string to binary.      | "12"          | "1010"                              |
| toBinaryFromBoolean(bool) | Converts a boolean to binary.            | true          | "1"                                 |
| toBinaryFromFloat(floatNum) | Converts a floating point number to binary. | 5.75         | "01000000101110000000000000000000"  |



### Binary to Other Formats

| Function              | Description                          | Example Input                              | Example Output |
|-----------------------|--------------------------------------|--------------------------------------------|----------------|
| binaryToNumber(binStr) | Converts a binary string to a number. | "1010"                                     | 10             |
| binaryToString(binStr, encoding="utf-8") | Converts binary to a string. | "01000001"                                 | "A"            |
| binaryToHex(binStr)   | Converts binary to hex.              | "1010"                                     | "A"            |
| binaryToOctal(binStr) | Converts binary to octal.            | "1010"                                     | "12"           |
| binaryToBoolean(binStr) | Converts binary to a boolean.       | "1"                                        | true           |
| binaryToFloat(binStr) | Converts binary to a float.          | "01000000101110000000000000000000"         | 5.75           |

### Binary Utility Functions

| Function              | Description                                      | Example Input       | Example Output |
|-----------------------|--------------------------------------------------|---------------------|----------------|
| padBinary(binStr, length) | Pads a binary string with leading zeros.         | "101", 8            | "00000101"     |
| chunkBinary(binStr, chunkSize) | Splits a binary string into chunks.              | "11001100", 4       | ["1100", "1100"]|
| invertBinary(binStr)  | Inverts (flips) binary bits.                      | "1010"              | "0101"         |
| xorBinary(bin1, bin2) | Performs XOR operation on two binary strings.     | "1100", "1010"      | "0110"         |
| andBinary(bin1, bin2) | Performs AND operation on two binary strings.     | "1100", "1010"      | "1000"         |
| orBinary(bin1, bin2)  | Performs OR operation on two binary strings.      | "1100", "1010"      | "1110"         |
| notBinary(binStr)     | Performs NOT operation (bit inversion).           | "1010"              | "0101"         |
| shiftBinaryLeft(binStr, places) | Shifts a binary string left by n places.         | "1010", 2           | "101000"       |
| shiftBinaryRight(binStr, places) | Shifts a binary string right by n places.        | "1010", 2           | "10"           |


# Contributing
Want to improve convert-binary? Follow these steps:

1. Fork the repo 
2. Create a new branch 
3. Commit your changes 
4. Push to your branch 
5. Submit a pull request! 