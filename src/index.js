module.exports = function reverse(n) {
    let result = "";
    let str = String(Math.abs(n));
    for (let i = 0; i < str.length; i++) {
        result = str[i] + result;
    }
    return result;
};
