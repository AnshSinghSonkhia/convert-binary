function padBinary(binStr, length) {
    return binStr.padStart(length, "0");
}

function chunkBinary(binStr, chunkSize) {
    return binStr.match(new RegExp(`.{1,${chunkSize}}`, "g")) || [];
}

function invertBinary(binStr) {
    return binStr.split("").map(bit => (bit === "1" ? "0" : "1")).join("");
}

function xorBinary(bin1, bin2) {
    return bin1.split("").map((bit, i) => (bit ^ bin2[i] || 0)).join("");
}

function andBinary(bin1, bin2) {
    return bin1.split("").map((bit, i) => (bit & bin2[i] || 0)).join("");
}

function orBinary(bin1, bin2) {
    return bin1.split("").map((bit, i) => (bit | bin2[i] || 0)).join("");
}

function notBinary(binStr) {
    return invertBinary(binStr);
}

function shiftBinaryLeft(binStr, places) {
    return binStr + "0".repeat(places);
}

function shiftBinaryRight(binStr, places) {
    return binStr.slice(0, -places) || "0";
}

module.exports = {
    padBinary,
    chunkBinary,
    invertBinary,
    xorBinary,
    andBinary,
    orBinary,
    notBinary,
    shiftBinaryLeft,
    shiftBinaryRight
};
