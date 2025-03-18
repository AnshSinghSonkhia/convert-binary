function toBinaryFromNumber(num) {
    return (num >>> 0).toString(2);
}

function toBinaryFromString(str, encoding = "utf-8") {
    return [...Buffer.from(str, encoding)]
        .map(byte => byte.toString(2).padStart(8, "0"))
        .join("");
}

function toBinaryFromHex(hexStr) {
    return parseInt(hexStr, 16).toString(2);
}

function toBinaryFromOctal(octalStr) {
    return parseInt(octalStr, 8).toString(2);
}

function toBinaryFromBoolean(bool) {
    return bool ? "1" : "0";
}

function toBinaryFromFloat(floatNum) {
    let buffer = new ArrayBuffer(4);
    let view = new DataView(buffer);
    view.setFloat32(0, floatNum);
    return [...new Uint8Array(buffer)]
        .map(byte => byte.toString(2).padStart(8, "0"))
        .join("");
}

function binaryToNumber(binStr) {
    return parseInt(binStr, 2);
}

function binaryToString(binStr, encoding = "utf-8") {
    let bytes = binStr.match(/.{1,8}/g);
    return Buffer.from(bytes.map(byte => parseInt(byte, 2))).toString(encoding);
}

function binaryToHex(binStr) {
    return parseInt(binStr, 2).toString(16).toUpperCase();
}

function binaryToOctal(binStr) {
    return parseInt(binStr, 2).toString(8);
}

function binaryToBoolean(binStr) {
    return binStr === "1";
}

function binaryToFloat(binStr) {
    let bytes = binStr.match(/.{1,8}/g).map(b => parseInt(b, 2));
    let buffer = new Uint8Array(bytes).buffer;
    let view = new DataView(buffer);
    return view.getFloat32(0);
}

module.exports = {
    toBinaryFromNumber,
    toBinaryFromString,
    toBinaryFromHex,
    toBinaryFromOctal,
    toBinaryFromBoolean,
    toBinaryFromFloat,
    binaryToNumber,
    binaryToString,
    binaryToHex,
    binaryToOctal,
    binaryToBoolean,
    binaryToFloat
};
