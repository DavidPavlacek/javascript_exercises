const removeFromArray = function(...numbs) {

    let argArray = numbs[0];
    let filtered = argArray.filter(function(val){
         return val = !numbs.includes(val)
    }); return filtered
};
module.exports = removeFromArray;
