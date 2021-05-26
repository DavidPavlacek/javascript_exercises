const repeatString = function(text, number) {
     
    if (number < 0) {return "ERROR"};
    if (text != isNaN()) { text = text.toString()};
    if (number > 0) {
         return text.repeat(number);
    }else return "";
};
module.exports = repeatString;
