const sumAll = function(a, b) {

    let finalSum = [];

    if ( !Number.isInteger(a) || !Number.isInteger(b) || 
         a < 0 || b < 0) { 
         return "ERROR"
    } else if (a > b) {
         for ( a, b; b <= a; b++) {
              finalSum.push(b); }
    } else 
         for ( a, b; a <= b; a++) {
              finalSum.push(a); 
    }    return finalSum.reduce((a, b) => a + b)
}   
module.exports = sumAll;
