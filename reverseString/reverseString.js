const reverseString = function(text) {

    let strReverse = text.split("");
    strReverse.reverse();
    return strReverse.join("");
};

module.exports = reverseString;
